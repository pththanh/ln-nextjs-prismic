import clsx from "clsx";

type ArticleTypeProps = {
  type: string;
  className?: string;
};
const ArticleType = ({ type, className }: ArticleTypeProps) => {
  return (
    <div className={clsx(" py-2 px-6 bg-black text-white", className)}>
      {type}
    </div>
  );
};

export default ArticleType;
