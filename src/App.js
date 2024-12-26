import React, { useRef, useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import MouseEventContext from "./context/context";
import theme from "./style/theme";
import Nav from "./components/Nav";
// import Main from "./components/Main";
// import AboutMe from "./components/AboutMe";
// import AboutMe2 from "./components/AboutMe2";
// // import Skill from "./components/Skill";
// import Skill2 from "./components/Skill2";
// import Project from "./components/Project";
// import Art from "./components/Art";
import { useScroll } from "framer-motion";
import { throttle } from "lodash";
import Home from "./page/Home";
import ProjectModal from "./components/section/ProjectModal";

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

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [crrentScrollY, setCrrentScrollY] = useState(0);
  const [navTarget, setNavTarget] = useState();
  const { scrollY } = useScroll();

  const navClick = (nav) => {
    setNavTarget(nav);
  };

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMouseX(e.pageX - window.innerWidth / 2);
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
      <MouseEventContext.Provider value={{ mouseX, crrentScrollY, scrollY }}>
        <Page>
          <Nav navClick={navClick} />
          <Home navTarget={navTarget} />
        </Page>
      </MouseEventContext.Provider>
    </ThemeProvider>
  );
};

export default App;
