import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import clsx from "clsx";

/**
 * Props for `CoverImage`.
 */
export type CoverImageProps = SliceComponentProps<Content.CoverImageSlice>;

/**
 * Component for "CoverImage" Slices.
 */
const CoverImage = ({ slice }: CoverImageProps): JSX.Element => {
  return (
    <div>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative h-screen"
      >
        {prismic.isFilled.image(slice.primary.main_image) && (
          <PrismicImage
            field={slice.primary.main_image}
            className="absolute top-0 left-0 h-full	w-full object-cover"
          />
        )}
        <div
          className="absolute top-1/2 left-1/2 w-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ color: slice.primary.color || "#fff" }}
        >
          {prismic.isFilled.keyText(slice.primary.title) && (
            <h2 className="text-5xl font-bold	tracking-wide">
              {slice.primary.title}
            </h2>
          )}
          {prismic.isFilled.keyText(slice.primary.description) && (
            <p className="text-2xl pt-10">{slice.primary.description}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoverImage;
