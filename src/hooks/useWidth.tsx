import { useEffect, useState } from "react";

export const useWidth = (breakpoint = 768) => {
  const [isSmaller, setIsSmaller] = useState(false);

  useEffect(() => {
    const checkSmaller = () => {
      setIsSmaller(window.innerWidth < breakpoint);
    };
    checkSmaller();
    window.addEventListener("resize", checkSmaller);

    return () => {
      window.removeEventListener("resize", checkSmaller);
    };
  }, [breakpoint]);

  return { isSmaller, isBigger: !isSmaller };
};
