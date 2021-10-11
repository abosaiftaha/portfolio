import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import {
  SiReact,
  SiNextDotJs,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGraphql,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiCss3,
  SiNodeDotJs,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiFigma,
  SiFramer,
  SiWebgl,
  SiAdonisjs,
  SiDocker,
  SiSvelte,
  SiDeno,
} from "react-icons/si";

interface AboutProps {}

const PanelKeyFrames = keyframes`
  0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const AboutStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 12vw;
  z-index: 2;

  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .skills {
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    .content {
      width: 100%;
      .category {
        .category-title {
          font-size: 18px;
          font-weight: 200;
          padding-bottom: 5px;
          margin-bottom: 5px;
          position: relative;

          &::before {
            content: "";
            width: 50px;
            height: 0.5px;
            bottom: 0;
            left: 0;
            position: absolute;
            background: ${({ theme }) => theme.colors.grey};
          }
        }

        .category-icons {
          width: 70%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          padding: 10px 0;

          .skill-icon {
            margin-right: 15px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme.colors.grey};
          }
        }
      }
    }
  }

  .about {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .content {
      width: 80%;
      font-size: 18px;
      margin-bottom: 15px;

      &.grey {
        width: 55%;
        color: ${({ theme }) => theme.colors.grey};
      }
    }

    .contact {
      a {
        padding: 5px 7px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.grey};
        transition: all 0.4s ease-in-out;
        position: relative;
        overflow: hidden;
        &::before {
          content: "";
          width: 100%;
          height: 0.5px;
          bottom: 0;
          left: 0;
          position: absolute;
          background: ${({ theme }) => theme.colors.white};
          opacity: 0;
          transform: translate3d(-80%, 0, 0);
          transition: opacity 300ms, transform 300ms;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.white};
          &:before {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
`;

const iconSize = 20;

const About: FC<AboutProps> = () => {
  return (
    <AboutStyles>
      <div className="skills">
        <div className="title">Skills</div>
        <div className="content">
          <div className="category">
            <div className="category-title">Development</div>
            <div className="category-icons">
              <SiReact size={iconSize} className="skill-icon" />
              <SiNextDotJs size={iconSize} className="skill-icon" />
              <SiTypescript size={iconSize} className="skill-icon" />
              <SiRedux size={iconSize} className="skill-icon" />
              <SiCss3 size={iconSize} className="skill-icon" />
              <SiSass size={iconSize} className="skill-icon" />
              <SiJavascript size={iconSize} className="skill-icon" />
              <SiTailwindcss size={iconSize} className="skill-icon" />
              <SiGit size={iconSize} className="skill-icon" />
              <SiNodeDotJs size={iconSize} className="skill-icon" />
              <SiGraphql size={iconSize} className="skill-icon" />
            </div>
          </div>
          <div className="category">
            <div className="category-title">Design</div>
            <div className="category-icons">
              <SiAdobeillustrator size={iconSize} className="skill-icon" />
              <SiAdobephotoshop size={iconSize} className="skill-icon" />
              <SiAdobexd size={iconSize} className="skill-icon" />
              <SiFigma size={iconSize} className="skill-icon" />
            </div>
          </div>
          <div className="category">
            <div className="category-title">Learning List</div>
            <div className="category-icons">
              <SiFramer size={iconSize} className="skill-icon" />
              <SiSvelte size={iconSize} className="skill-icon" />
              <SiDeno size={iconSize} className="skill-icon" />
              <SiAdonisjs size={iconSize} className="skill-icon" />
              <SiDocker size={iconSize} className="skill-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="title">About Me</div>
        <div className="content">
          I am a 23-years-old Web and Mobile Developer who aims to combine his
          knowledge in UX/UI design and front-end development to create
          well-performing and responsive Softwares where motion, interaction and
          design are perfectly integrated to form a unique experience.
        </div>
        <div className="content grey">
          I use Next JS and React Native as a main weapon, TypeScript as a
          shield, Git as an inventory, and Terminal is the place I keep my
          crafting tools in, where CSS is my teammate.
        </div>
        <div className="contact">
          Want to learn more:{" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1z9XFQmCc-Ly1aFb9ijg6_Cyzp11f4NHJ/view?usp=sharing"
          >
            Download my resume
          </a>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
