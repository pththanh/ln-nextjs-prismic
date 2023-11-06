import { createClient } from "@/prismicio";
import { KeyTextField } from "@prismicio/client";
import React from "react";
import * as prismic from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

type FooterProps = {
  lang: string;
};

type SignUpProps = {
  title: prismic.RichTextField;
  description: prismic.RichTextField;
  disclaimer: prismic.RichTextField;
  placeholder: KeyTextField;
};

const CoppyRight = ({ text }: { text: KeyTextField }) => {
  const currentDay = new Date();
  return (
    <div className="pt-10">
      <p>
        @{currentDay.getFullYear()} {text}
      </p>
    </div>
  );
};

const SignUpForm = ({
  title,
  description,
  disclaimer,
  placeholder,
}: Partial<SignUpProps>) => {
  return (
    <form
      action="/api/sign-up"
      method="POST"
      className="pt-24 pb-12 flex flex-col gap-5"
    >
      {prismic.isFilled.richText(title) && (
        <div>
          <PrismicRichText
            field={title}
            components={{
              heading2: ({ children }) => (
                <Heading as="h2" className="mb-6 text-center">
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
      )}
      {prismic.isFilled.richText(description) && (
        <div className="mb-6">
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="italic last:mb-0">{children}</p>
              ),
            }}
          />
        </div>
      )}
      <div>
        <div className="relative">
          <label>
            <span className="sr-only">Email address</span>
            <input
              name="email"
              type="email"
              placeholder={placeholder || "phamtruonghoaithanh.ptbt@gmail.com"}
              required={true}
              className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
            />
          </label>
          <button
            type="submit"
            className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
          >
            <span className="sr-only">Submit</span>
            <span aria-hidden={true}>&rarr;</span>
          </button>
        </div>
        {prismic.isFilled.richText(disclaimer) && (
          <p className="text-xs tracking-tight text-slate-500 pl-3 pt-3">
            <PrismicText field={disclaimer} />
          </p>
        )}
      </div>
    </form>
  );
};

export default async function Footer({ lang }: FooterProps) {
  const client = createClient({}, lang);
  const footer = await client.getSingle("footer");

  return (
    <footer className="flex flex-col justify-center items-center px-10 py-10">
      <HorizontalDivider />
      <SignUpForm
        title={footer.data.newsletter_title}
        description={footer.data.newsletter_description}
        disclaimer={footer.data.newsletter_disclaimer}
        placeholder={footer.data.place_holder}
      />
      <HorizontalDivider />
      <CoppyRight text={footer.data.coppy_right} />
    </footer>
  );
}
