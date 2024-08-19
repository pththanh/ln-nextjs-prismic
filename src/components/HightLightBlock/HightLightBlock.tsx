"use client";

import React, { Fragment } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";
import Carousel from "../Carousel";

interface IHightLightProps {
  items: {
    image: any;
    href: any;
    content: KeyTextField;
    title: KeyTextField;
  }[];
}

const carouselSettings = {
  dots: false,
  autoplay: true,
  speed: 2000,
};

function HightLightBlock({ items }: IHightLightProps) {
  return (
    <section className="w-full py-20 min-h-[90vh] md:py-32 bg-gradient-to-r from-black to-slate-50">
      <Carousel showArrows={false} settings={carouselSettings}>
        {items.map(({ title, content, href, image }, index) => (
          <div className="container px-[50px]" key={index}>
            <div className="grid gap-6 grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl  font-bold text-white">{title}</h1>
                <p className="text-lg text-white">{content}</p>
                <PrismicNextLink
                  document={href}
                  prefetch={false}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-primary shadow-lg transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  View Blog
                </PrismicNextLink>
              </div>
              <PrismicNextImage
                field={image}
                className="mx-auto rounded-2xl shadow-2xl"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HightLightBlock;
