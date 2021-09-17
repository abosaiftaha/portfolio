import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Animations } from "../hooks/animations";
import { useMousePosition } from "../hooks/useMousePosition";
import { useWindowSize } from "../hooks/useWindowResize";
import GeekSVG from "../public/assets/GeekSVG";

const HeroBanner = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainText = styled.div.attrs((props: { width: number }) => ({
  width: props.width || 240,
}))`
  -webkit-text-stroke: 5px ${({ theme }) => theme.colors.white};
  color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.salsa};
  font-size: ${({ width }) => `${width / 6}px`};
  text-align: center;
  position: relative;
  z-index: 2;
`;

const GeekStickerContainer = styled(motion.div)`
  width: 180px;
  height: 180px;
  position: absolute;
  right: -20px;
  top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const { width } = useWindowSize();
  const { transition } = Animations();
  const { hoverMainTitle } = useMousePosition();

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
        transition={{ ...transition, duration: 1 }}
        variants={{
          hidden: {
            y: "120%",
          },
          visible: {
            y: "0%",
          },
        }}
      >
        <MainText width={width}>
          Ahmad Taha
          <GeekStickerContainer
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
              },
            }}
          >
            <GeekSVG />
          </GeekStickerContainer>
        </MainText>
      </HeroBanner>
    </>
  );
};

export default Home;
