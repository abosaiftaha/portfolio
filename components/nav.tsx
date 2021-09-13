import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { IoMoonOutline, IoSunnyOutline, IoMailOutline } from "react-icons/io5";
import styled from "styled-components";

interface NavProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

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
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

const MailIcon = styled(IoMailOutline)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
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

const Nav: FunctionComponent<NavProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Container>
      <Home>Home</Home>

      <div>
        <MailIcon size={30} />
        {isDarkMode ? (
          <SunIcon size={27} onClick={() => setIsDarkMode(false)} />
        ) : (
          <MoonIcon size={27} onClick={() => setIsDarkMode(true)} />
        )}
      </div>
    </Container>
  );
};

export default Nav;
