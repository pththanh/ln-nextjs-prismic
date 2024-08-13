import { cn } from "@/utils/lib/util";
import { KeyTextField } from "@prismicio/client";

type ArticleTypeProps = {
  type: undefined | KeyTextField;
  className?: string;
};
const ArticleType = ({ type, className }: ArticleTypeProps) => {
  return (
    <div className={cn(" py-2 px-6 bg-black text-white", className)}>
      {type}
    </div>
  );
};

export default ArticleType;
