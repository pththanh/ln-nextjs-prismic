import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

type NavProps = {
  lang: string;
};

const Nav = async ({ lang }: NavProps) => {
  const client = createClient();
  const menuData = await client.getSingle("menu", { lang: lang });
  return (
    <ul className="flex justify-center gap-10 h-[80px] items-center">
      {menuData?.data.navigation?.map(({ name, link }, index) => (
        <li
          className="text-2xl font-bold tracking-tight text-slate-800 "
          key={index}
        >
          <PrismicNextLink field={link}>{name}</PrismicNextLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
