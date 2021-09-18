import { motion } from "framer-motion";
import type { NextPage } from "next";
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
