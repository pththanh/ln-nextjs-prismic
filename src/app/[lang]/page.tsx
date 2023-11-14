import { createClient } from "@/prismicio";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import React from "react";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import ArticleCard from "@/components/ArticleCard";
import { Heading } from "@/components/Heading";
import LoadingCircle from "@/components/LoadingCircle";

type IntroduceProps = {
  image: prismic.ImageField;
  text: prismic.RichTextField;
  bgColor?: prismic.ColorField;
};

const Introduce = ({ image, text, bgColor }: IntroduceProps) => {
  return (
    <section
      className="flex my-20 w-4/5 items-center mx-auto"
      style={{ backgroundColor: bgColor ?? "" }}
    >
      <div className="w-3/5">
        <PrismicImage field={image} />
      </div>
      <div className="w-2/5 text-center">
        {prismic.isFilled.richText(text) && (
          <PrismicRichText
            field={text}
            components={{
              heading2: ({ children }) => (
                <Heading as="h2" className="mb-6">
                  {children}
                </Heading>
              ),
              paragraph: ({ children }) => <p className="px-5">{children}</p>,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient({}, params.lang);
  const home = await client.getSingle("home").catch(() => notFound());
  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
    fetchLinks: [
      "article_type.type",
      "author.author_image",
      "author.author_name",
    ],
    limit: 6,
  });

  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />
      <Introduce
        image={home.data.introduce_image}
        text={home.data.introduce_text}
        bgColor={home.data.background_color}
      />
      <div className="grid grid-cols-2 gap-2 mx-10 2xl:grid-cols-3 2xl:gap-5">
        {articles?.map((item, index) => (
          <ArticleCard
            type={item.data.type}
            title={item.data.article_title}
            image={item.data.article_image}
            createdAt={item.data.created_date}
            tags={item.tags}
            content={item.data.content}
            authorImage={item.data.author_link}
            authorName={item.data.author_link}
            timeToRead={item.data.time_to_read}
            href={item}
            externalHref={item.data.article_link}
            isExternalHref={item.data.article_link.link_type === "Web"}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
