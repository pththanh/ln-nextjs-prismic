import React from "react";
import { ArticleCardProps } from "../ArticleCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { DateField, ImageFieldImage, KeyTextField } from "@prismicio/client";
import ArticleType from "../ArticleType";
import Author from "../Author";

interface ISpecialCardProps {
  primaryCard: ArticleCardProps;
  secondaryCard: ArticleCardProps[];
}

const Card = ({
  image,
  authorImage,
  authorName,
  href,
  type,
  title,
  createdAt,
}: Partial<ArticleCardProps>) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative w-full h-0 pb-custom">
        <PrismicNextLink document={href} rel={undefined}>
          <PrismicNextImage
            field={image}
            className="absolute inset w-full h-full object-cover cursor-pointer"
          />
        </PrismicNextLink>
        <div className="absolute top-0 left-0">
          <ArticleType type={type?.data.type} className="w-min" />
        </div>
        <div className="absolute bottom-0 left-0 pb-[20px] pl-[20px] w-full bg-slate-900 bg-opacity-50">
          <span className="line-clamp-2 absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-black via-slate-600 to-slate-900 bg-clip-text text-2xl box-content font-extrabold text-transparent select-none">
            {title}
          </span>
          <h2 className=" line-clamp-2 text-2xl relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-400 via-purple-500 to-pink-500 bg-clip-text  font-extrabold text-transparent select-auto">
            {title}
          </h2>
          <div>
            <Author
              image={authorImage.data.author_image}
              name={authorName.data.author_name}
              jobPosition={createdAt}
              className={{
                wrapper: "mt-2",
                name: "text-white",
                jobPostion: "text-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecialCard = ({ primaryCard, secondaryCard }: ISpecialCardProps) => {
  return (
    <div className="grid grid-cols-6 grid-rows-2 p-[30pt]">
      <div className="row-span-2 col-span-4">
        <Card {...primaryCard} />
      </div>
      {secondaryCard.map((item, index) => (
        <div className="col-span-2" key={index}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default SpecialCard;
