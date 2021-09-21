import React from "react";
import styled, { useTheme } from "styled-components";
import { useMousePosition } from "../hooks/useMousePosition";
import { motion } from "framer-motion";
import { useAppContext } from "../utils/contextProvider";

const CursorFollower = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 96px;
  border-radius: 100%;
  background: url("/assets/cursorFollowerInverted.png") 0 0 no-repeat;
  background-size: 100% 100%;
  mix-blend-mode: difference;
  z-index: 20;
  &.dark {
    background: url("/assets/cursorFollower.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }

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
  const { x, y, hoverNav } = useMousePosition();
  const theme = useTheme();
  const { isDark } = useAppContext();

  return (
    <>
      <CursorFollower
        className={isDark ? "dark" : ""}
        animate={{
          top: y,
          left: x,
          x: "-50%",
          y: "-50%",
          scale: hoverNav ? 1.8 : 1,
          opacity: hoverNav ? 1 : 0.3,
        }}
        transition={{ ease: "linear", duration: 0.15 }}
      />
      <Curser
        className={hoverNav ? "on-focus" : ""}
        style={{
          top: y,
          left: x,
        }}
      />
    </>
  );
};

export { Cursor };
