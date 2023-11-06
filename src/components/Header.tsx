"use client";
import React, { useEffect, useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { createClient } from "@/prismicio";
import { MenuDocument } from "../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

type NavItemProps = {
  children: React.ReactNode;
};

type HeaderProps = {
  lang: string;
  scrollDirection?: "down" | "up" | null;
};

const NavItem = ({ children }: NavItemProps) => {
  return (
    <li className="text-2xl font-bold tracking-tight text-slate-800 ">
      {children}
    </li>
  );
};

export default function Header({ lang }: HeaderProps) {
  const [menu, setMenu] = useState<MenuDocument<string>>();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const menuData = await client.getSingle("menu", { lang: lang });
        setMenu(menuData);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchData();
  }, [lang]);

  return (
    <header
      className={`sticky	ease-in-out	transition-all duration-500 z-10 shadow-md bg-white ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }`}
    >
      <nav className="relative">
        <ul className="flex justify-center gap-10 h-[80px] items-center">
          {menu?.data.navigation?.map(({ name, link }, index) => (
            <NavItem key={index}>
              <PrismicNextLink field={link}>{name}</PrismicNextLink>
            </NavItem>
          ))}
        </ul>
        <div className="text-xl absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2">
          {menu?.data.language?.toUpperCase()}
        </div>
      </nav>
    </header>
  );
}
