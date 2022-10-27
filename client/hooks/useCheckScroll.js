import { useEffect, useState } from "react";

export const useCheckIfFixed = (position) => {
  const [fixed, setFixed] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY <= position) setFixed((fixed) => true);
    else setFixed((fixed) => false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return fixed;
};
