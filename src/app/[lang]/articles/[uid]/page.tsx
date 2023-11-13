import React from "react";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Author, { AuthorProps } from "@/components/Author";
import * as prismic from "@prismicio/client";
import { BackButton } from "@/components/BackButton";
import ArticleType from "@/components/ArticleType";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { ArticleTypeDocument, AuthorDocument } from "../../../../../prismicio-types";

interface TitlePostProps extends AuthorProps {
  title: prismic.KeyTextField | undefined;
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

    const type = prismic.isFilled.contentRelationship<'article_type', string, ArticleTypeDocument['data']>(post.data.type) 
    ? post.data.type.data?.type 
    : undefined;

    const author = prismic.isFilled.contentRelationship<'author', string, AuthorDocument['data']>(post.data.author_link) 
    ? {
        name: post.data.author_link.data?.author_name,
        image: post.data.author_link.data?.author_image,
      }
    : undefined;

  const allPosts = await client.getAllByType("article", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
    filters: [prismic.filter.not("my.article.uid", post.uid)],
    limit: 4,
  });

  let relatedPosts = await client.getBySomeTags(post.tags, {
    filters: [prismic.filter.not("my.article.uid", post.uid)],
  });

  const result = [];

  // if (post.tags.length) {
  //   let relatedPosts = await client.getBySomeTags(post.tags, {
  //     filters: [prismic.filter.not("document.uid", post.uid)],
  //   });

  //   if (relatedPosts.results?.length < 4) {
  //   }
  // } else {
  // }

  // console.log("POST By UID", post);
  console.log("Related Posts", relatedPosts);

  return (
    <div className="flex flex-col w-5/6 h-full my-10 mx-auto">
      <BackButton
        name="Home Page"
        href={`/${params.lang}/`}
        className="mb-10"
      />
      {type && (
        <ArticleType
          type={type}
          className="relative w-max before:content-[''] before:absolute before:top-[-20px] before:right-[-15px] before:bg-white before:w-[30px] before:h-[30px] before:rotate-45"
        />
      )} 
      <TitlePost
        title={post.data.article_title}
        name={author?.name}
        image={author?.image}
      />
      <SliceZone slices={post.data.slices} components={components} />
    </div>
  );
}
