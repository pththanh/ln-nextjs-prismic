import type { Metadata } from "next"; // dynamic metadata
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'


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

// export const metadata: Metadata = {
//   title: "Next x Prismic",
//   description: "Next x Prismic",
// };

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient({},"en-us");

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
