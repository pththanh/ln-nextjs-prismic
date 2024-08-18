import type { Metadata } from "next"; // dynamic metadata
import { Lora } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import GoogleAnalyticsTracking from "@/components/GoogleAnalyticsTracking";
import { cn } from "@/utils/lib/util";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Next x Prismic",
//   description: "Next x Prismic",
// };

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalyticsTracking />
      <body className={cn("font-body", lora.variable)}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
