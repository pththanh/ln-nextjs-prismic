import type { Metadata, ResolvingMetadata } from "next";
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export const nuntito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const nuntinoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

type MetaDataProps = {
  params: { lang: string; uid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: MetaDataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log({
    params,
    searchParams,
  });

  const client = createClient({}, params.lang);

  return {
    title: "Title",
    description: "Default Description",
    openGraph: {
      images: [""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nuntito.variable, nuntinoSans.variable)}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
