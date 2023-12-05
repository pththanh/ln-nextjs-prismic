"use client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
  }[];
  currentLang: string;
}

const localeLabels = {
  "en-us": "EN",
  vi: "VI",
};

export const LanguageSwitcher = ({
  locales,
  currentLang,
}: LanguageSwitcherProps) => {
  const pathName = usePathname();
  const isLangInRoute = pathName.startsWith(`/${currentLang}`);

  return (
    <div className="flex flex-wrap gap-3">
      <ul className="flex flex-wrap gap-3">
        {locales?.map(
          (locale) =>
            locale.lang !== currentLang && (
              <li key={locale.lang}>
                <PrismicNextLink
                  href={
                    isLangInRoute
                      ? pathName.replace(currentLang, locale.lang)
                      : `/${locale.lang}${pathName}`
                  }
                  locale={locale.lang}
                  aria-label={`Change language to ${locale.lang_name}`}
                >
                  {localeLabels[locale.lang as keyof typeof localeLabels] ||
                    locale.lang}
                </PrismicNextLink>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
