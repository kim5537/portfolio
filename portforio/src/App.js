import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Main from "./components/Main";

const Globalstyle = createGlobalStyle`
@font-face {
  font-family: 'EF_jejudoldam';
  src: url(/fonts/EF_jejudoldam) format('truetype');
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
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
