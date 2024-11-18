import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Main from "./components/Main";
import Nav from "./components/Nav";

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
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Nav />
      <Main />
      <div>끝~!</div>
    </ThemeProvider>
  );
};

export default App;
