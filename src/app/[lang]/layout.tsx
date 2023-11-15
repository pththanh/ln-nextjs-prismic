import type { Metadata, ResolvingMetadata } from "next"; // dynamic metadata
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from "@/prismicio";

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

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

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

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={clsx(nuntito.variable, nuntinoSans.variable)}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
