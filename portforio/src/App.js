import React, { useRef, useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import MouseEventContext from "./context/context";
import theme from "./style/theme";
import Nav from "./components/Nav";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import AboutMe2 from "./components/AboutMe2";
import Skill from "./components/Skill";
import Skill2 from "./components/Skill2";
import Project from "./components/Project";
import Art from "./components/Art";
import { useScroll } from "framer-motion";
import { throttle } from "lodash";

const Globalstyle = createGlobalStyle`
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('/fonts/EF_jejudoldam.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: 'Noto Sans KR', sans-serif ;
}
`;

const Page = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

const Section01 = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 0px;
  position: relative;
  width: 100vw;
  max-width: 100%;
`;

const TreeBack = styled.div`
  height: auto;
  width: 100vw;
  max-width: 100%;
  img {
    position: absolute;
    top: 0px;
    width: 100vw;
    max-width: 100%;
    z-index: 6;
  }
`;

const Tree = styled.div`
  height: auto;
  img {
    position: absolute;
    top: -100px;
    right: -10vw;
    width: 60vw;
    transform: rotate(-10deg);
    z-index: 10;
  }
`;

const Tree2 = styled.div`
  height: auto;
  img {
    position: absolute;
    top: -40px;
    left: -10vw;
    width: 70vw;
    transform: rotate(12deg);
    z-index: 10;
  }
`;

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [crrentScrollY, setCrrentScrollY] = useState(0);
  const mainRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const artRef = useRef();
  const { scrollY } = useScroll();

  const navPages = {
    Main: mainRef,
    AboutMe: aboutRef,
    Skill: skillRef,
    Project: projectRef,
    Art: artRef,
  };

  const navClick = (nav) => {
    const sectionRef = navPages[nav];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`nav error: ${nav}`);
    }
  };

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMouseX(e.pageX - window.innerWidth / 2);
      console.log(e.pageX, window.innerWidth);
    }, 50);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const scrollNum = throttle(
      scrollY.on("change", (pre) => {
        setCrrentScrollY(pre);
      }),
      50
    );
    const unsubscroll = scrollY.on("change", scrollNum);
    return () => {
      unsubscroll();
      scrollNum.cancel();
    };
  }, [scrollY]);

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <MouseEventContext.Provider value={{ mouseX, crrentScrollY }}>
        <Page>
          <Nav navClick={navClick} />
          <Main ref={mainRef} />
          <AboutMe ref={aboutRef} />
          <AboutMe2 />
          <Skill2 ref={skillRef} />
          <Section01>
            <TreeBack>
              <img
                src={`${process.env.PUBLIC_URL}/section/back00.png`}
                alt="back"
              />
            </TreeBack>
            <Tree>
              <img
                src={`${process.env.PUBLIC_URL}/section/tree00.png`}
                alt="tree"
              />
            </Tree>
            <Tree2>
              <img
                src={`${process.env.PUBLIC_URL}/section/tree01.png`}
                alt="tree"
              />
            </Tree2>
          </Section01>
          <Project ref={projectRef} />
          <Art ref={artRef} />
        </Page>
      </MouseEventContext.Provider>
    </ThemeProvider>
  );
};

export default App;
