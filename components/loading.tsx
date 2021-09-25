import React from "react";

// packages
import { motion } from "framer-motion";
import styled from "styled-components";

// utils
import { useAppContext } from "../utils/contextProvider";

const LoadingContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::after {
    content: "";
    background: url("/assets/grain.png") 0 0/150px auto;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
  }
`;

const LightSpot = styled(motion.div)`
  background: url("/assets/cursorFollower.png") 0 0 no-repeat;
  background-size: 100% 100%;
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &.light {
    background: url("/assets/cursorFollowerInverted.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
`;

const LoadingText = styled(motion.div)`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: 40px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  &.word {
    margin-bottom: 5px;
    margin-left: 20px;
  }
`;

const loadingSentences = [
  "Hold On...",
  "Just A Sec...",
  "Any Minute Now...",
  "Loading...",
  "It's Coming...",
  "One Moment...",
  "Almost There...",
  "Hang On...",
  "Easy Does It...",
];

const randomNum = Math.floor(Math.random() * loadingSentences.length);

const variants = {
  container: {
    hidden: {
      width: "100vw",
      x: 0,
      opacity: 1,
    },
    visible: {
      width: 0,
      x: "100vw",
      opacity: 0.5,
    },
  },
  lightSpot: {
    hidden: {
      width: "100vh",
      height: "100vh",
    },
    visible: { width: 0, height: 0 },
  },
  sentence: {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  },
  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

const LoadingScreen = () => {
  const { isDark } = useAppContext();

  return (
    <LoadingContainer
      initial="hidden"
      animate="visible"
      variants={variants.container}
      transition={{ delay: 4, duration: 0.3 }}
    >
      <LightSpot
        className={isDark ? "" : "light"}
        initial="hidden"
        animate="visible"
        variants={variants.lightSpot}
        transition={{ duration: 3, delay: 1 }}
      >
        <LoadingText
          initial="hidden"
          animate="visible"
          variants={variants.sentence}
        >
          {loadingSentences[randomNum].split(" ").map((word, index) => (
            <div key={`${word}-${index}`} className="word">
              {word.split("").map((char, index) => (
                <motion.span
                  variants={variants.letter}
                  key={`${char}-${index}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </LoadingText>
      </LightSpot>
    </LoadingContainer>
  );
};

export default LoadingScreen;
