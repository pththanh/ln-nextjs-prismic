import { createClient } from "@/prismicio";
import { KeyTextField } from "@prismicio/client";
import React from "react";
import * as prismic from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import GithubIcon from "./Icons/GithubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import { PrismicNextLink } from "@prismicio/next";

type FooterProps = {
  lang: string;
};

type SignUpProps = {
  title: prismic.RichTextField;
  description: prismic.RichTextField;
  disclaimer: prismic.RichTextField;
  placeholder: KeyTextField;
};

const SocialIcon = ({ platform }: { platform: prismic.KeyTextField }) => {
  switch (platform) {
    case "Facebook": {
      return <FacebookIcon height={20} width={20} />;
    }
    case "Instagram": {
      return <InstagramIcon height={20} width={20} />;
    }
    case "Github": {
      return <GithubIcon height={20} width={20} />;
    }
    case "LinkedIn": {
      return <LinkedInIcon height={20} width={20} />;
    }
  }
};

const CoppyRight = ({ text }: { text: KeyTextField }) => {
  const currentDay = new Date();
  return (
    <div className="pt-10">
      <p>
        @{currentDay.getFullYear()} - {text}
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
  const client = createClient();
  const footer = await client.getSingle("footer", { lang: lang });

  // Assume these are coming from the Prismic data
  const blogName = footer.data.blog_name;
  const blogDescription = footer.data.blog_description;

  const socialLinks = footer.data.social_links;
  const quickLinks = footer.data.quick_links;

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 lg:mt-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">{blogName}</h2>
          <p className="text-gray-600 mb-4">{blogDescription}</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <PrismicNextLink
                field={link.social_link}
                target="_blank"
                rel={undefined}
                key={index}
                className="text-gray-400 hover:text-gray-500"
              >
                <SocialIcon platform={link.social_name} />
              </PrismicNextLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index} className="pl-[10px]">
                {/* <Link
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800"
                > */}
                {link.quick_name}
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
        <CoppyRight text={footer.data.coppy_right} />
      </div>
    </footer>
  );
}
