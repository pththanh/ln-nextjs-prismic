import React from "react";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Author, { AuthorProps } from "@/components/Author";
import * as prismic from "@prismicio/client";
import { BackButton } from "@/components/BackButton";
import ArticleType from "@/components/ArticleType";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

interface TitlePostProps extends AuthorProps {
  title: prismic.KeyTextField;
}

const TitlePost = ({ title, name, image }: TitlePostProps) => {
  return (
    <section>
      <h1 className="text-6xl xl:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <Author name={name} image={image} />
    </section>
  );
};

export default async function Page({
  params,
}: {
  params: { lang: string; uid: string };
}) {
  const client = createClient({}, params.lang);

  const post = await client
    .getByUID("article", params.uid, {
      fetchLinks: [
        "article_type.type",
        "author.author_image",
        "author.author_name",
      ],
    })
    .catch(() => notFound());

  console.log("POST By UID", post);

  return (
    <div className="flex flex-col w-5/6 h-full my-10 mx-auto">
      <BackButton
        name="Home Page"
        href={`/${params.lang}/`}
        className="mb-10"
      />
      {prismic.isFilled.keyText(post.data.type.data.type) && (
        <ArticleType
          type={post.data.type.data.type}
          className="relative w-max before:content-[''] before:absolute before:top-[-20px] before:right-[-15px] before:bg-white before:w-[30px] before:h-[30px] before:rotate-45"
        />
      )}
      <TitlePost
        title={post.data.article_title}
        name={post.data.author_link.data.author_name}
        image={post.data.author_link.data.author_image}
      />
      <SliceZone slices={post.data.slices} components={components} />
    </div>
  );
}
