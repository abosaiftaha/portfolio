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
        <title>Ahmad Taha</title>
        <link rel="icon" href="/favicon.ico" />
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
