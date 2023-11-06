import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SepcialArticle`.
 */
export type SepcialArticleProps =
  SliceComponentProps<Content.SepcialArticleSlice>;

/**
 * Component for "SepcialArticle" Slices.
 */
const SepcialArticle = ({ slice }: SepcialArticleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sepcial_article (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SepcialArticle;
