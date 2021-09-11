import type { AppProps } from "next/app";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import FontGlobalStyle from "../public/fonts";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Salsa BT';
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    .bold {
      font-family: 'Lato';
      font-weight: bold;
    }
  }

  body{
    padding: 70px;
  }

  * {
    box-sizing: border-box;
  }
  `;

const theme: DefaultTheme = {
  colors: {
    blue: "#5AC1F4",
    yellow: "#FCD406",
    purple: "#BB7DFF",
    red: "#FE7171",
    black: "#000",
    white: "#ffff",
  },
  fontFamily: {
    salsa: "Salsa BT",
    lato: "Lato",
  },
  fontSize: {
    xs: ".75rem",
    sm: ".875rem",
    tiny: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  spacing: {
    "1": "8px",
    "2": "12px",
    "3": "16px",
    "4": "24px",
    "5": "32px",
    "6": "48px",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FontGlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
