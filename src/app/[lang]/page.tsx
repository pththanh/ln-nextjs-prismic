import { createClient } from "@/prismicio";
import { PrismicImage } from "@prismicio/react";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import React from "react";
import { Heading } from "@/components/Heading";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import ArticleCard from "@/components/ArticleCard";
import { PrismicRichText } from "@/components/PrismicRichText";

type IntroduceProps = {
  image: prismic.ImageField;
  text: prismic.RichTextField;
};

const Introduce = ({ image, text }: IntroduceProps) => {
  return (
    <section className="flex py-10 w-3/4 items-center mx-auto">
      <div className="w-1/2">
        <PrismicImage field={image} />
      </div>
      <div className="w-1/2">
        {prismic.isFilled.richText(text) && (
          <PrismicRichText field={text} className="text-center" />
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
  });

  console.log({
    articles,
    article: articles[1].tags,
  });
  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />
      <Introduce
        image={home.data.introduce_image}
        text={home.data.introduce_text}
      />
      <div className="grid grid-cols-2 gap-2 mx-10">
        {articles?.map((item, index) => (
          <ArticleCard
            type={item.data.type.link_type}
            title={item.data.article_title}
            image={item.data.article_image}
            createdAt={item.data.created_date}
            tags={item.tags}
            content={item.data.content}
            authorImage={item.data.author_link.data.author_image}
            authorName={item.data.author_link.data.author_name}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
