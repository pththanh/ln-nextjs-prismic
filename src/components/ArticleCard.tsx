import { RichTextField } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import React from "react";
import { PrismicRichText } from "./PrismicRichText";
import Badge from "./Badge";

type ArticleCardProps = {
  type?: string;
  title: RichTextField;
  createdAt?: string;
  image?: any;
  authorImage?: any;
  authorName?: any;
  content?: RichTextField;
  tags: string[];
};

const ArticleCard = ({
  type,
  title,
  image,
  createdAt,
  authorImage,
  authorName,
  content,
  tags,
}: ArticleCardProps) => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="relative w-full h-0 pb-custom ">
        <PrismicImage
          field={image}
          className="absolute inset w-full h-full object-cover"
        />
      </div>
      <PrismicRichText field={title} />
      <p>
        <em>{createdAt}</em>
      </p>
      <PrismicRichText field={content} />
      <div className="p-2">
        <Badge tags={tags} />
      </div>
      <div className="flex gap-2 justify-start items-center">
        <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
          <PrismicImage
            field={authorImage}
            className="w-full h-full object-cover"
          />
        </div>
        <p>{authorName}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
