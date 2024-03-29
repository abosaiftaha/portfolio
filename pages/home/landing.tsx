import React, { FC, useState } from "react";
import styled, { useTheme } from "styled-components";

// hooks
import { Animations } from "../../hooks/animations";
import { BsArrowDown } from "react-icons/bs";
import Tilt from "react-tilt";
// packages
import { motion } from "framer-motion";

interface LandingProps {
  fullpageApi: any;
}

const LandingStyles = styled(motion.div)`
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
    padding: 10px;
    z-index: 1;
    @media (max-width: 768px) {
      align-items: center;
    }

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
      @media (max-width: 768px) {
        padding: 0;
        -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
        font-size: 20vw;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }

      &.hovered {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .secondary-text {
      font-size: 16px;
      font-weight: 200;
      margin: 0 4.5vw;
      margin-bottom: -20px;
      z-index: 99;
      @media (max-width: 768px) {
        font-size: 16px;
        margin: 10px 0;
      }

      a {
        color: ${({ theme }) => theme.colors.white};
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
      color: ${({ theme }) => theme.colors.grey};
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

const Landing: FC<LandingProps> = ({ fullpageApi }) => {
  const [hoverMainTitle, setHoverMainTitle] = useState(false);
  const { transition, textReveal } = Animations();
  const theme = useTheme();

  return (
    <LandingStyles
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
            <a>Web & Mobile Developer</a>
          </motion.div>
          <div className={`main-text ${hoverMainTitle && "hovered"}`}>
            Ahmad Taha
          </div>
        </motion.div>
      </Tilt>
      <div
        className="arrow-container"
        onClick={() => fullpageApi.moveSectionDown()}
      >
        <BsArrowDown size={25} className="arrow" />
      </div>
    </LandingStyles>
  );
};

export default Landing;
