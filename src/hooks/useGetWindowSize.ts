import { useEffect, useState } from "react";

const useGetWindowSize = () => {
  const [{ width, height }, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    width,
    height,
  };
};

export default useGetWindowSize;
