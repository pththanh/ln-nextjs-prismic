import { cn } from "@/utils/lib/util";
import { ImageField, KeyTextField } from "@prismicio/client";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export type AuthorProps = {
  image?: ImageField;
  name: KeyTextField | undefined;
  jobPosition?: KeyTextField;
  className?: {
    wrapper?: string;
    name?: string;
    jobPostion?: string;
  };
};

const Author = ({ image, name, jobPosition, className }: AuthorProps) => {
  return (
    <section>
      <div
        className={cn(
          "flex gap-2 justify-start items-center mt-5",
          className?.wrapper
        )}
      >
        {prismic.isFilled.image(image) && (
          <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
            <PrismicNextImage
              field={image}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className={`${jobPosition ? "divide-x-2 divide-gray-500" : ""}`}>
          <cite
            className={cn("pr-2 font-medium text-gray-900", className?.name)}
          >
            {name}
          </cite>
          <cite
            className={cn("pl-2 text-sm text-gray-500", className?.jobPostion)}
          >
            {jobPosition}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Author;
