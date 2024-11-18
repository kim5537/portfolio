import React, { useRef } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Test from "./components/Test";

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
    navPages[nav].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Nav navClick={navClick} navPages={navPages} />
      <Main ref={mainRef} />
      <div style={{ height: "100vh", width: "100%" }}>끝~!</div>
    </ThemeProvider>
  );
};

export default App;
