import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const setCurrentTheme = (chosenTheme) => {
    window.localStorage.setItem("theme", chosenTheme);
    setTheme((theme) => chosenTheme);
  };

  const toggleTheme = () => {
    theme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
  };

  useEffect(() => {
    const userTheme = window.localStorage.getItem("theme");
    userTheme && setTheme((theme) => userTheme);
  }, [theme]);

  return { theme, toggleTheme };
};
