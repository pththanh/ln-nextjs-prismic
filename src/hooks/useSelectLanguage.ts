"use client";
import { useRouter } from "next/navigation";

interface Props {
  lang: string;
}

const useSelectLanguage = ({ lang }: Props) => {
  const router = useRouter;

  localStorage.setItem("language", lang);
  console.log({
    router,
  });

  return router;
};

export default useSelectLanguage;
