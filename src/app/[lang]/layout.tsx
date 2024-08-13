import type { Metadata } from "next"; // dynamic metadata
import { Lora } from "next/font/google";
import { createClient } from "@/prismicio";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { getLocales } from "../lib/getLocales";
import { cn } from "@/utils/lib/util";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
      <body className={cn("font-body", lora.variable)}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
