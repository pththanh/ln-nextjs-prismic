"use client";
import React, { ReactNode, useEffect, useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { createClient } from "@/prismicio";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { getLocales } from "@/app/lib/getLocales";

type HeaderProps = {
  lang: string;
  children: ReactNode;
};

export default function HeaderWrapper({ lang, children }: HeaderProps) {
  const [locales, setLocales] = useState([{ lang: "", lang_name: "" }]);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const menuData = await client.getSingle("menu", { lang: lang });
        const locales = await getLocales(menuData, client);
        setLocales(locales);
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
        {children}
        <div className="text-xl absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2">
          <LanguageSwitcher locales={locales} currentLang={lang} />
        </div>
      </nav>
    </header>
  );
}
