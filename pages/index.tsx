import { motion } from "framer-motion";
import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import { Animations } from "../hooks/animations";
import { useMousePosition } from "../hooks/useMousePosition";
import { useWindowSize } from "../hooks/useWindowResize";
// import GeekSVG from "../public/assets/GeekSVG";
import Tilt from "react-tilt";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .hero-banner {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      position: relative;
      z-index: 1;

      .main-text {
        -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
        color: transparent;
        font-family: ${({ theme }) => theme.fontFamily.salsa};
        font-size: 10vw;
        padding: 1vw 2vw 0 2vw;
        text-align: center;
        position: relative;
        z-index: 2;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.white};
        }

        &.hovered {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      .secondary-text {
        font-size: 1vw;
        font-weight: 300;
        padding: 0 2vw;

        p {
          margin: 0 0 5px 0;
        }
      }

      &:hover {
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 25vw;
          height: 25vw;
          background: url("/assets/emoji.png") no-repeat;
          background-position: center;
          background-size: contain;
          transition: ease-in-out 0.5;
          z-index: 2;
        }
      }
    }
  }
`;

const variants = {
  heroBanner: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

const Home: NextPage = () => {
  const { width } = useWindowSize();
  const { transition, textReveal } = Animations();
  const { hoverMainTitle } = useMousePosition();
  const theme = useTheme();

  return (
    <HomeStyles>
      <motion.div
        className="hero-banner"
        initial="hidden"
        animate="visible"
        transition={{ ...textReveal, duration: 2, delay: 4.2 }}
        variants={variants.heroBanner}
      >
        <Tilt options={{ max: 25 }}>
          <motion.div
            id="mainTitle"
            className="content"
            whileHover={{ color: theme.colors.white }}
          >
            <div className={`main-text ${hoverMainTitle && "hovered"}`}>
              {"Ahmad Taha"}
            </div>
            <div className="secondary-text">
              <p>Software Engineer</p>
              <p>Front-end Geek</p>
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    </HomeStyles>
  );
};

export default Home;
