import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/Styles.js";
import { useToggleTheme } from "../hooks/useToggleTheme.js";
import { Navbar } from "../components/index.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// apollo client setup
const client = new ApolloClient({
  uri: "https://gql-technical-assignment.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: { "Content-Type": "application/json" },
});

function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
