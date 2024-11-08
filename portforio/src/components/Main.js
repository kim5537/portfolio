import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = () => {
  return (
    <Container>
      <ImgWrap>
        <Img style={`${process.env.PUBLIC_URL}/mainImg/back01.png`}></Img>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ImgWrap>
    </Container>
  );
};

export default Main;
