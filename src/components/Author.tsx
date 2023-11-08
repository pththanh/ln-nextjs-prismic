import { ImageField, KeyTextField } from "@prismicio/client";
import * as prismic from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";

export type AuthorProps = {
  image?: ImageField;
  name: KeyTextField;
  jobPosition?: KeyTextField;
};

const Author = ({ image, name, jobPosition }: AuthorProps) => {
  return (
    <section>
      <div className="flex gap-2 justify-start items-center mt-5">
        {prismic.isFilled.image(image) && (
          <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
            <PrismicImage
              field={image}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className={`${jobPosition ? "divide-x-2 divide-gray-500" : ""}`}>
          <cite className="pr-2 font-medium text-gray-900">{name}</cite>
          <cite className="pl-2 text-sm text-gray-500">{jobPosition}</cite>
        </div>
      </div>
    </section>
  );
};

export default Author;
