import React from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v3.041h-1.571c-1.5 0-2.144 1.115-2.144 2.121v2.275h3.714l-.66 3.47h-3.055v8.384c5.736-.9 10.125-5.864 10.125-11.854z" />
    </svg>
  );
};

export default FacebookIcon;
