import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import Badge from "./Badge";
import {
  DateField,
  KeyTextField,
  LinkField,
  PrismicDocument,
} from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Author from "./Author";
import ArticleType from "./ArticleType";

export type ArticleCardProps = {
  type?: any;
  title: KeyTextField;
  createdAt?: DateField | string;
  image?: any;
  authorImage?: any;
  authorName?: any;
  content?: KeyTextField;
  timeToRead?: KeyTextField;
  tags: string[];
  href: any;
  externalHref?: LinkField;
  isExternalHref?: boolean;
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
  timeToRead,
  href,
  externalHref,
  isExternalHref,
}: ArticleCardProps) => {
  return (
    <div className="flex flex-col w-full h-full border border-gray-200 rounded-lg shadow">
      <div className="relative w-full h-0 pb-custom">
        {isExternalHref ? (
          <PrismicNextLink field={externalHref} target="_blank" rel={undefined}>
            <PrismicNextImage
              field={image}
              className="absolute inset w-full h-full object-cover rounded-t-lg cursor-pointer"
            />
          </PrismicNextLink>
        ) : (
          <PrismicNextLink document={href} rel={undefined}>
            <PrismicNextImage
              field={image}
              className="absolute inset w-full h-full object-cover rounded-t-lg cursor-pointer"
            />
          </PrismicNextLink>
        )}
        <ArticleType
          type={type?.data.type}
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          <h2 className="line-clamp-2 text-2xl font-bold">{title}</h2>
          <div className="flex items-center justify-between">
            <p>
              <em>{createdAt}</em>
            </p>
            <p>
              <em>{timeToRead}</em>
            </p>
          </div>
        </div>

        <p className="line-clamp-4 my-7 h-full">{content}</p>
        <div>
          <Badge tags={tags} />
          <Author
            image={authorImage.data.author_image}
            name={authorName.data.author_name}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
