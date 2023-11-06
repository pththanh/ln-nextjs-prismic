import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";
import clsx from "clsx";

import { Heading } from "./Heading";

interface CustomComponentProps {}

const defaultComponents = {};

interface PrismicRichTextProps {
  components?: object;
  field?: any;
  className?: string;
  children?: ReactNode;
  node?: any;
}

export function PrismicRichText({
  components,
  field,
  className,
  ...props
}: PrismicRichTextProps) {
  const dynamicComponents = {
    heading1: ({ children, className }: PrismicRichTextProps) => (
      <Heading
        as="h2"
        size="3xl"
        className={clsx("mb-7 mt-12 first:mt-0 last:mb-0", className)}
      >
        {children}
      </Heading>
    ),
    heading2: ({ children, className }: PrismicRichTextProps) => (
      <Heading as="h3" size="2xl" className={clsx("mb-7 last:mb-0", className)}>
        {children}
      </Heading>
    ),
    heading3: ({ children, className }: PrismicRichTextProps) => (
      <Heading as="h4" size="xl" className={clsx("mb-7 last:mb-0", className)}>
        {children}
      </Heading>
    ),
    paragraph: ({ children, className }: PrismicRichTextProps) => (
      <p className={clsx("mb-7 last:mb-0", className)}>{children}</p>
    ),
    oList: ({ children, className }: PrismicRichTextProps) => (
      <ol className={clsx("mb-7 pl-4 last:mb-0 md:pl-6", className)}>
        {children}
      </ol>
    ),
    oListItem: ({ children, className }: PrismicRichTextProps) => (
      <li
        className={clsx("mb-1 list-decimal pl-1 last:mb-0 md:pl-2", className)}
      >
        {children}
      </li>
    ),
    list: ({ children, className }: PrismicRichTextProps) => (
      <ul className={clsx("mb-7 pl-4 last:mb-0 md:pl-6", className)}>
        {children}
      </ul>
    ),
    listItem: ({ children, className }: PrismicRichTextProps) => (
      <li className={clsx("mb-1 list-disc pl-1 last:mb-0 md:pl-2", className)}>
        {children}
      </li>
    ),
    preformatted: ({ children, className }: PrismicRichTextProps) => (
      <pre
        className={clsx(
          "mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg",
          className
        )}
      >
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children, className }: PrismicRichTextProps) => (
      <strong className={clsx("font-semibold", className)}>{children}</strong>
    ),
    hyperlink: ({ children, node, className }: PrismicRichTextProps) => (
      <PrismicNextLink
        field={node.data}
        className={clsx("underline decoration-1 underline-offset-2", className)}
      >
        {children}
      </PrismicNextLink>
    ),
    ...components,
  };
  return (
    <BasePrismicRichText
      field={field}
      components={dynamicComponents}
      {...props}
    />
  );
}
