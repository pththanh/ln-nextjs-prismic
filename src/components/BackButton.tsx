import Link from "next/link";
import { cn } from "@/utils/lib/util";

type BackButtonProps = {
  name: string;
  href?: string;
  className?: string;
};

export const BackButton = ({ name, href, className }: BackButtonProps) => {
  return (
    <Link
      href={href ?? "/"}
      className={cn("font-semibold tracking-tight text-slate-400", className)}
    >
      &larr; Back to {name}
    </Link>
  );
};
