import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HightLight`.
 */
export type HightLightProps = SliceComponentProps<Content.HightLightSlice>;

/**
 * Component for "HightLight" Slices.
 */
const HightLight = ({ slice }: HightLightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative m-20 rounded bg-slate-300"
    >
      <div className="absolute top-0 left-0 -translate-y-1/2 translate-x-2 bg-slate-50 text-yellow-400 px-2 py-2 rounded shadow border border-yellow-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-yellow-400 w-4 h-4"
        >
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"></path>
          <path
            fill-rule="evenodd"
            d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="pt-8 pb-6 px-8">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default HightLight;
