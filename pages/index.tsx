import type { NextPage } from "next";

//packages
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";

// hooks
import { Animations } from "../hooks/animations";
import Landing from "./home/landing";
import About from "./home/about";
import Projects from "./home/projects";

const HomeStyles = styled.div`
  .section {
    height: 100vh;
    width: 100vw;

    &.about {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("/assets/me.png") right no-repeat;
        background-size: 500px 500px;
        opacity: ${({ theme }) => theme.aboutImageOpacity};
        z-index: -1;
      }
    }

    &.vertical-align-bottom {
      .fp-tableCell {
        vertical-align: bottom;
      }
    }
  }
`;

const Home: NextPage = () => {
  return (
    <ReactFullpage
      navigation
      keyboardScrolling
      licenseKey={process.env.licenseKey}
      render={() => (
        <ReactFullpage.Wrapper>
          <HomeStyles>
            <div className="section">
              <Landing />
            </div>

            <div className="section about">
              <About />
            </div>

            <div className="section">
              <Projects />
            </div>

            <div className="section">
              <div className="about">
                <h3 className="head-line">About Me</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut blanditiis dolorem commodi, nobis totam reiciendis fuga,
                  veritatis incidunt eaque, qui veniam. Aperiam quibusdam modi
                  ex voluptate cumque suscipit iure!
                </p>
              </div>
            </div>
          </HomeStyles>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Home;
