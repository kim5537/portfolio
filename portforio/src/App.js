import React, { useRef } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Test from "./components/Test";
import AboutMe from "./components/AboutMe";
import Section from "./components/Section";
import AboutMe2 from "./components/AboutMe2";

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

const App = () => {
  const mainRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const artRef = useRef();

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
      console.error(`Invalid ref for nav: ${nav}`);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Section />
      <Nav navClick={navClick} />
      <Main ref={mainRef} />
      <AboutMe ref={aboutRef} />
      <AboutMe2 />
    </ThemeProvider>
  );
};

export default App;
