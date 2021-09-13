import type { AppProps } from "next/app";
import { useState } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { Cursor } from "../components/cursor";
import Nav from "../components/nav";
import FontGlobalStyle from "../public/fonts";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
  }

  body{
    cursor: none;
    isolation: isolate;
    padding: 0 70px;
  }

  * {
    box-sizing: border-box;
  }
  `;

const darkTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#000",
    white: "#fff",
  },
  fontFamily: {
    salsa: "Salsa BT",
    lato: "Lato",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#fff",
    white: "#000",
  },
  fontFamily: {
    salsa: "Salsa BT",
    lato: "Lato",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <FontGlobalStyle />
        <Cursor />
        <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
