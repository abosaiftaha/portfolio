import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowResize";

const HeroBanner = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.div.attrs((props: { width: number }) => ({
  width: props.width || 240,
}))`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.salsa};
  font-size: ${({ width }) => `${width / 6}px`};
  text-align: center;
`;

const Home: NextPage = () => {
  const { width } = useWindowSize();

  return (
    <>
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
      <HeroBanner
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <MainText width={width}>Ahmad Taha</MainText>
      </HeroBanner>
    </>
  );
};

export default Home;
