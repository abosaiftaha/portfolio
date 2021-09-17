import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { Cursor } from "../components/cursor";
import Nav from "../components/nav";
import AppThemeProvider from "../components/themeProvider";
import { ContextWrapper } from "../context/contextProvider";
import FontGlobalStyle from "../public/fonts";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  
  body{
    cursor: none;
    isolation: isolate;
    padding: 0 70px;
    background-color: ${({ theme }) => theme.colors.black};

    &::after{
      content: '';
      background: url("/assets/grain.png") 0 0/150px auto;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: -1;  
    }
  }

  * {
    box-sizing: border-box;
  }
  `;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <AppThemeProvider>
        <GlobalStyle />
        <FontGlobalStyle />
        <Cursor />
        <Nav />
        <Component {...pageProps} />
      </AppThemeProvider>
    </ContextWrapper>
  );
}
export default MyApp;
