import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import React from "react";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import ArticleCard from "@/components/ArticleCard";
import { Heading } from "@/components/Heading";
import SpecialCard from "@/components/SpecialCard";
import { flattenArtilce } from "@/utils/Article";

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
        <PrismicNextImage field={image} />
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
  const client = createClient();
  const home = await client
    .getSingle("home", { lang: params.lang })
    .catch(() => notFound());
  const articlesData = await client.getAllByType("article", {
    lang: params.lang,
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

  const articles = flattenArtilce(articlesData);

  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />
      <SpecialCard
        primaryCard={articles[1]}
        secondaryCard={[articles[2], articles[3]]}
      />
      {/* <Introduce
        image={home.data.introduce_image}
        text={home.data.introduce_text}
        bgColor={home.data.background_color}
      /> */}
      <div className="grid grid-cols-2 gap-2 mx-10 2xl:grid-cols-3 2xl:gap-5">
        {articles?.map((item, index) => <ArticleCard {...item} key={index} />)}
      </div>
    </>
  );
}
