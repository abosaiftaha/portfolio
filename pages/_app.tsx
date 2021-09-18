import type { AppProps } from "next/app";
import Head from "next/head";
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
      <Head>
        <title>{"Ahmad's Portfolio"}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
