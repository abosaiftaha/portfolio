import type { AppProps } from "next/app";

// packages
import { createGlobalStyle } from "styled-components";

// components
import { Cursor } from "../components/cursor";
import LoadingScreen from "../components/loading";
import Nav from "../components/nav";
import AppHead from "../components/head";

// utils
import AppThemeProvider from "../utils/themeProvider";
import { ContextWrapper } from "../utils/contextProvider";

//assets
import FontGlobalStyle from "../public/fonts";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

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
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.lato};
    
      /* Custom Scrollbar with FireFox */
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => `${theme.colors.white}26`} transparent;
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


    /* Custom Scrollbar on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => `${theme.colors.white}26`};
      border-radius: 20px;
      border: 3px solid transparent;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <AppHead />
      <AppThemeProvider>
        <GlobalStyle />
        <FontGlobalStyle />
        <Cursor />
        <Nav />
        <LoadingScreen />
        <Component {...pageProps} />
      </AppThemeProvider>
    </ContextWrapper>
  );
}
export default MyApp;
