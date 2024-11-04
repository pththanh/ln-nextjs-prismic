"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import * as prismic from "@prismicio/client";

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
          <PrismicNextImage
            field={slice.primary.main_image}
            className="absolute top-0 left-0 h-full	w-full object-cover"
          />
        )}
        {slice.primary.has_animation ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 200, x: "-50%" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: "-50%",
              x: "-50%",
            }}
            transition={{
              y: {
                duration: 1,
                ease: "easeInOut",
              },
              opacity: {
                duration: 1,
              },
            }}
            className="absolute top-1/2 left-1/2 w-3/4 text-center p-5"
            style={{
              color: slice.primary.color || "#fff",
              transform: "translate(-50%, -50%)",
            }}
          >
            {prismic.isFilled.keyText(slice.primary.title) && (
              <h2 className="text-5xl font-bold	tracking-wide">
                {slice.primary.title}
              </h2>
            )}
            {prismic.isFilled.keyText(slice.primary.description) && (
              <p className="text-2xl pt-10">{slice.primary.description}</p>
            )}
          </motion.div>
        ) : (
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
        )}
      </section>
    </div>
  );
};

export default CoverImage;
