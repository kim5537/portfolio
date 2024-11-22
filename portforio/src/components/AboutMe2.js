import React from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2400px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  border: 1px solid;
`;
const BackImgWrap = styled.div`
  width: 760px;
  height: 470px;
  position: relative;
  margin: 40px auto;
  transform: translate(32%, 0%);
  overflow: hidden;
`;

const AboutMe2 = () => {
  return (
    <Container>
      <BackImgWrap>
        <Img bgimg={`aboutImg/sky.png`} />
        <Img bgimg={`aboutImg/Window.png`} />
      </BackImgWrap>
    </Container>
  );
};

export default AboutMe2;
