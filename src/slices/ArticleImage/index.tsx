import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ArticleImage`.
 */
export type ArticleImageProps = SliceComponentProps<Content.ArticleImageSlice>;

/**
 * Component for "ArticleImage" Slices.
 */
const ArticleImage = ({ slice }: ArticleImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <figure className="grid grid-cols-1 gap-4">
        {prismic.isFilled.image(slice.primary.article_image) && (
          <div className="bg-gray-100">
            <PrismicNextImage
              field={slice.primary.article_image}
              sizes="100vw"
              className="w-full object-contain"
            />
          </div>
        )}
        {prismic.isFilled.keyText(slice.primary.image_caption) && (
          <figcaption className="text-center italic tracking-tight text-slate-500">
            <p>{slice.primary.image_caption}</p>
          </figcaption>
        )}
      </figure>
    </section>
  );
};

export default ArticleImage;
