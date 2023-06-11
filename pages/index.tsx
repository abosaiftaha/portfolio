import About from "./home/about";
import Landing from "./home/landing";
import type { NextPage } from "next";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

const HomeStyles = styled.div`
  .fp-watermark {
    display: none;
  }

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
          </HomeStyles>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Home;
