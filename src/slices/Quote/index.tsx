import Author from "@/components/Author";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <figure
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-screen-md mx-auto text-center"
    >
      {slice.variation !== "quoteWithoutIcon" && (
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
      )}
      <blockquote>
        <p className="text-2xl italic font-medium text-gray-900">
          {slice.primary.content}
        </p>
      </blockquote>
      {prismic.isFilled.keyText(slice.primary.author_name) && (
        <figcaption className="flex items-center justify-center mt-4 space-x-3">
          <Author
            name={slice.primary.author_name}
            image={slice.primary.author_image}
            jobPosition={slice.primary.author_job_position}
          />
        </figcaption>
      )}
    </figure>
  );
};

export default Quote;
