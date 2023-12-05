import type { Metadata } from "next"; // dynamic metadata
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocales } from "../lib/getLocales";

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

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowsite",
    description: settings.data.meta_description || "Default Description",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {

  return (
    <html lang="en">
      <body className={clsx(nuntito.variable, nuntinoSans.variable)}>
        <Header lang={params.lang}/>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
