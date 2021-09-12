import React from "react";
import styled from "styled-components";
import { useMousePosition } from "../hooks/useMousePosition";
import { motion } from "framer-motion";

const CursorFollower = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  padding: 25px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  mix-blend-mode: difference;
  z-index: 20;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const Curser = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, -50%);
  z-index: 20;
  &.on-focus {
    background-color: transparent;
  }
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const Cursor = () => {
  const { x, y, hoverNav, hoverMainTitle } = useMousePosition();
  return (
    <>
      <CursorFollower
        animate={{
          top: y,
          left: x,
          x: "-50%",
          y: "-50%",
          scale: 1,
          opacity: 0.4,
        }}
        transition={{ ease: "linear", duration: hoverMainTitle ? 2 : 0.2 }}
      />
      <Curser
        style={{
          top: y,
          left: x,
        }}
      />
    </>
  );
};

export { Cursor };
