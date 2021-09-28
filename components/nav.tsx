import React, { FunctionComponent } from "react";

// packages
import { IoMoonOutline, IoSunnyOutline, IoMailOutline } from "react-icons/io5";
import styled from "styled-components";

// utils
import { useAppContext } from "../utils/contextProvider";

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 90px;
`;

const Home = styled.a`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const MailIcon = styled(IoMailOutline)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
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

const IconContainer = styled.a`
  margin: 0 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav: FunctionComponent<{}> = () => {
  const { isDark, toggleDark } = useAppContext();

  return (
    <Container>
      <Home>Home</Home>

      <LeftContainer>
        <IconContainer href="mailto:ahmad.khaled.taha@outlook.com">
          <MailIcon size={30} className="link-icon" />
        </IconContainer>
        {isDark ? (
          <SunIcon
            size={27}
            className="link-icon"
            onClick={() => toggleDark && toggleDark(false)}
          />
        ) : (
          <MoonIcon
            size={27}
            className="link-icon"
            onClick={() => toggleDark && toggleDark(true)}
          />
        )}
      </LeftContainer>
    </Container>
  );
};

export default Nav;
