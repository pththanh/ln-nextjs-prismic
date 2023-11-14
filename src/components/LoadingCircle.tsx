import React from "react";

type LoadingProps = {
  size?: number;
  isFullPage?: boolean;
  isFullPageChild?: boolean;
  zIndex?: number;
};

const LoadingCircle = ({
  size = 50,
  isFullPage,
  isFullPageChild,
  zIndex = 10,
}: LoadingProps) => {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className={`${isFullPage ? "fixed" : ""} ${
        isFullPageChild ? "absolute" : ""
      } inset-0 z-${zIndex} before:content-[""] before:bg-black before:opacity-40 before:absolute before:w-full before:h-full`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <svg
          className={`h-[${size}px] w-[${size}px] animate-spin stroke-red-600`}
          viewBox="0 0 256 256"
        >
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
        </svg>
      </div>
    </div>
  );
};

export default LoadingCircle;
