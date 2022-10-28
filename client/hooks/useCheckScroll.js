import { useEffect, useState } from "react";

export const useCheckIfFixed = (position = 1060) => {
  const [isNavFixed, setIsNavFixed] = useState(true);
  const [isFilterFixed, setIsFilterFixed] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY <= position) {
      setIsNavFixed((fixed) => true);
      setIsFilterFixed((fixed) => false);
    } else {
      setIsNavFixed((fixed) => false);
      setIsFilterFixed((fixed) => true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return { isNavFixed, isFilterFixed };
};
