import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";

import { Heading } from "./Heading";

interface CustomComponentProps {
  children?: ReactNode;
  node?: any;
}

const defaultComponents = {
  heading1: ({ children }: CustomComponentProps) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }: CustomComponentProps) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }: CustomComponentProps) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: CustomComponentProps) => (
    <p className="mb-7 last:mb-0">{children}</p>
  ),
  oList: ({ children }: CustomComponentProps) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }: CustomComponentProps) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }: CustomComponentProps) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }: CustomComponentProps) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }: CustomComponentProps) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }: CustomComponentProps) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }: CustomComponentProps) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

interface PrismicRichTextProps {
  components?: object;
  field?: any;
}

export function PrismicRichText({
  components,
  field,
  ...props
}: PrismicRichTextProps) {
  return (
    <BasePrismicRichText
      field={field}
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
