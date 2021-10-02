import React, { FunctionComponent } from "react";

// packages
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import styled from "styled-components";

// utils
import { useAppContext } from "../utils/contextProvider";

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 12vw;
`;

const Text = styled.a`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
`;

const MoonIcon = styled(IoMoonOutline)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;

const SunIcon = styled(IoSunnyOutline)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;

const Nav: FunctionComponent<{}> = () => {
  const { isDark, toggleDark } = useAppContext();

  return (
    <Container>
      <Text>Home</Text>
      {isDark ? (
        <SunIcon
          size={20}
          className="link-icon"
          onClick={() => toggleDark && toggleDark(false)}
        />
      ) : (
        <MoonIcon
          size={20}
          className="link-icon"
          onClick={() => toggleDark && toggleDark(true)}
        />
      )}

      <Text>Hire Me</Text>
    </Container>
  );
};

export default Nav;
