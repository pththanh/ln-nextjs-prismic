import React from "react";

type BadgeProps = {
  tags: string[];
};

function Badge({ tags }: BadgeProps) {
  return (
    <div className="flex gap-1 items-center">
      {tags?.map((item, index) => (
        <div
          key={index}
          className="text-white bg-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Badge;
