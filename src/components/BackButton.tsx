import Link from "next/link";
import clsx from "clsx";

type BackButtonProps = {
  name: string;
  href?: string;
  className?: string;
};

export const BackButton = ({ name, href, className }: BackButtonProps) => {
  return (
    <Link
      href={href ?? "/"}
      className={clsx("font-semibold tracking-tight text-slate-400", className)}
    >
      &larr; Back to {name}
    </Link>
  );
};
