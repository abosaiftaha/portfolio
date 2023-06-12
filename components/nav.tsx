// packages
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import React, { FunctionComponent } from "react";
import { SiGithub, SiLinkedin, SiMailDotRu } from "react-icons/si";

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

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Text = styled.a`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
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

const LinkedinIcon = styled(IoLogoLinkedin)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;

const GithubIcon = styled(IoLogoGithub)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;

const MailIcon = styled(IoMail)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
`;

const Nav: FunctionComponent<{}> = () => {
  const { isDark, toggleDark } = useAppContext();

  return (
    <Container>
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

      <RightSection>
        <LinkedinIcon
          className="link-icon"
          size={20}
          onClick={() =>
            window.open("https://www.linkedin.com/in/abosaiftaha", "_blank")
          }
        />

        <GithubIcon
          className="link-icon"
          size={20}
          onClick={() =>
            window.open("https://github.com/abosaiftaha", "_blank")
          }
        />

        <MailIcon
          className="link-icon"
          size={20}
          onClick={() =>
            window.open(
              `mailto:work@abosaiftaha.com?Subject=Job Opportunity`,
              "_blank"
            )
          }
        />
      </RightSection>
    </Container>
  );
};

export default Nav;
