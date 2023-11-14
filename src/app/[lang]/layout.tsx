import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

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
    <>
      <Header lang={params.lang} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer lang={params.lang} />
    </>
  );
}
