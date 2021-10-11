import React from "react";
import styled from "styled-components";

// packages
import { motion } from "framer-motion";

// hooks
import { useMousePosition } from "../hooks/useMousePosition";
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

  p {
    font-size: 20px;
    position: absolute;
    transform: translate(-50%, -100%);
  }
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    display: none;
  }
`;

const Cursor = () => {
  const { x, y, hoverNav, hoverDrag } = useMousePosition();
  const { isDark } = useAppContext();

  console.log(hoverDrag);

  return (
    <>
      <CursorFollower
        className={isDark ? "dark" : ""}
        animate={{
          top: y,
          left: x,
          x: "-50%",
          y: "-50%",
          scale: hoverNav || hoverDrag ? 1.8 : 1,
          opacity: hoverNav || hoverDrag ? 1 : 0.5,
        }}
        transition={{ ease: "linear", duration: 0.15 }}
      />
      <Curser
        className={hoverNav || hoverDrag ? "on-focus" : ""}
        style={{
          top: y,
          left: x,
        }}
      >
        {hoverDrag && <p>Drag</p>}
      </Curser>
    </>
  );
};

export { Cursor };
