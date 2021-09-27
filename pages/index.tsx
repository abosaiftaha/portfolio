import { useState } from "react";
import type { NextPage } from "next";

//packages
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { IoArrowDownCircle } from "react-icons/io5";
import Tilt from "react-tilt";
import ReactFullpage from "@fullpage/react-fullpage";

// hooks
import { Animations } from "../hooks/animations";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .section {
    height: 100vh;
    width: 100vw;
  }

  .hero-banner {
    height: 100%;
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
        -webkit-text-stroke: 2px ${({ theme }) => theme.colors.white};
        color: transparent;
        font-family: ${({ theme }) => theme.fontFamily.salsa};
        font-size: 10vw;
        padding: 0 2vw;
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
        font-size: 1.3vw;
        font-weight: 300;
        margin: 0 4.5vw;
        color: ${({ theme }) => theme.colors.white};
        /* font-weight: 900; */

        p {
          margin: 0;
        }
      }

      &:hover {
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 17vw;
          height: 17vw;
          background: url("/assets/front-end-geek.svg") no-repeat;
          background-position: center;
          background-size: contain;
          transition: ease-in-out 0.5;
          z-index: 2;
        }
      }
    }

    .arrow-container {
      position: absolute;
      bottom: 5vh;
      left: 50%;
      transform: translateX(-50%);

      .arrow {
        margin: 0 auto;
        opacity: 0.1;
      }
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .head-line {
      font-family: ${({ theme }) => theme.fontFamily.salsa};
      font-size: 3vw;
      margin: 0;
    }

    .paragraph {
      width: 50%;
      font-size: 1.3vw;
      font-weight: 300;
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
  const [hoverMainTitle, setHoverMainTitle] = useState(false);
  const { transition, textReveal } = Animations();
  const theme = useTheme();

  return (
    <ReactFullpage
      navigation
      render={() => (
        <ReactFullpage.Wrapper>
          <HomeStyles>
            <div className="section">
              <motion.div
                className="hero-banner"
                initial="hidden"
                animate="visible"
                transition={{ ...textReveal, duration: 2, delay: 4.2 }}
                variants={variants.heroBanner}
              >
                <Tilt
                  options={{ max: 25, easing: "cubic-bezier(.03,.98,.52,.99)" }}
                  onMouseEnter={() => setHoverMainTitle(true)}
                  onMouseLeave={() => setHoverMainTitle(false)}
                >
                  <motion.div
                    className="content"
                    whileHover={{ color: theme.colors.white }}
                  >
                    <motion.div
                      className="secondary-text"
                      whileHover={{ scale: 1.1, transition: { ...transition } }}
                    >
                      <a>Software Engineer</a>
                    </motion.div>
                    <div className={`main-text ${hoverMainTitle && "hovered"}`}>
                      Ahmad Taha
                    </div>
                  </motion.div>
                </Tilt>
                <div className="arrow-container">
                  <IoArrowDownCircle size={40} className="arrow" />
                </div>
              </motion.div>
            </div>

            <div className="section">
              <div className="about">
                <h3 className="head-line">About Me</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut blanditiis dolorem commodi, nobis totam reiciendis fuga,
                  veritatis incidunt eaque, qui veniam. Aperiam quibusdam modi
                  ex voluptate cumque suscipit iure!
                </p>
              </div>
            </div>

            <div className="section">
              <div className="about">
                <h3 className="head-line">About Me</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut blanditiis dolorem commodi, nobis totam reiciendis fuga,
                  veritatis incidunt eaque, qui veniam. Aperiam quibusdam modi
                  ex voluptate cumque suscipit iure!
                </p>
              </div>
            </div>

            <div className="section">
              <div className="about">
                <h3 className="head-line">About Me</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut blanditiis dolorem commodi, nobis totam reiciendis fuga,
                  veritatis incidunt eaque, qui veniam. Aperiam quibusdam modi
                  ex voluptate cumque suscipit iure!
                </p>
              </div>
            </div>
          </HomeStyles>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Home;
