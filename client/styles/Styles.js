import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    font-size: 1rem;
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  }
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background} ;
    cursor: default;
    min-height: 100vh;
    transition: all 0.5s linear;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
`;

const theme = {
  fonts: {
    main: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: "screen and (min-width: 640px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 1024px)",
    xl: "screen and (min-width: 1280px)",
  },
};

const light = {
  colors: {
    text: "rgba(0, 0, 0, 0.88)",
    filter: "rgba(0, 0, 0, 0.5)",
    filterHover: "rgba(0, 0, 0, 0.4)",
    filterActive: "rgba(0, 0, 0, 0.88)",
    background: "rgb(251, 248, 245)",
    bannerBackground: "rgb(183, 199, 201)",
    bannerLink: "#CC835C",
    line: "rgb(238, 226, 215)",
    navBackground: "white",
    buttonBackground: "white",
    buttonBorder: "rgba(0, 0, 0, 0.05)",
    buttonHoverBackground: "rgba(0, 0, 0, 0.05)",
    buttonShadow: "rgb(0 0 0 / 5%)",
  },
};

const dark = {
  colors: {
    text: "rgba(255, 255, 255, 0.88)",
    filter: "rgba(255, 255, 255, 0.5)",
    filterHover: "rgba(255, 255, 255, 0.4)",
    filterActive: "rgba(255, 255, 255, 0.88)",
    background: "rgb(20, 20, 20)",
    bannerBackground: "rgb(83, 99, 101)",
    bannerLink: "#CC835C",
    line: "rgb(17, 7, 10)",
    navBackground: "black",
    buttonBackground: "black",
    buttonBorder: "rgba(255, 255, 255, 0.05)",
    buttonHoverBackground: "rgba(255, 255, 255, 0.05)",
    buttonShadow: "rgb(255 255 255 / 5%)",
  },
};

export const lightTheme = { ...light, ...theme };
export const darkTheme = { ...dark, ...theme };
