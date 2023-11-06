import React from "react";

type BadgeProps = {
  tags: string[];
};

function Badge({ tags }: BadgeProps) {
  return (
    <div className="flex gap-5 items-center">
      {tags?.map((item, index) => (
        <div
          key={index}
          className="py-[3px] px-[10px] rounded-[30px] border-2 border-soli	border-slate-200 text-white bg-black"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Badge;
