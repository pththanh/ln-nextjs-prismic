import Link from "next/link";
import clsx from "clsx";

type BackButtonProps = {
  name: string;
  href?: string;
  className?: string;
  isScroll?: boolean;
};

export const BackButton = ({
  name,
  href,
  className,
  isScroll,
}: BackButtonProps) => {
  return (
    <Link
      href={href ?? "/"}
      scroll={isScroll}
      className={clsx("font-semibold tracking-tight text-slate-400", className)}
    >
      &larr; Back to {name}
    </Link>
  );
};
