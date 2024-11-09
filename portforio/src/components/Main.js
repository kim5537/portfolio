import React from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

const Base = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Man = styled.div`
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    left: -4vw;
    width: auto;
    height: 100%;
    object-fit: cover;
    &:nth-child(3) {
      transform-origin: 29% 17%;
    }
    &:nth-child(4) {
      transform-origin: 29% 17%;
    }
  }
`;

const Cat = styled.div`
  width: 100%;
  height: 100%;
  & > img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 100%;
    object-fit: cover;
  }
  & > div {
    img {
      position: absolute;
      right: 0px;
      bottom: 0;
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <ImgWrap>
        <Base>
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/back01.png`}></Img>
          <Img
            bgImg={`${process.env.PUBLIC_URL}/mainImg/back02.png`}
            // stylePlus={`transform: translateX(100px)`}
          ></Img>
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/back03.png`}></Img>
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/back04.png`}></Img>
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/back05.png`}></Img>
          <Img
            bgImg={`${process.env.PUBLIC_URL}/mainImg/back00.png`}
            top={0}
            left={0}
          ></Img>
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/obj00.png`} />
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/obj01.png`} />
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/obj02.png`} />
          <Img bgImg={`${process.env.PUBLIC_URL}/mainImg/obj03.png`} />
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Man>
            <img src={`${process.env.PUBLIC_URL}/mainImg/man01.png`} />
            <img src={`${process.env.PUBLIC_URL}/mainImg/man00.png`} />
            <motion.img
              src={`${process.env.PUBLIC_URL}/mainImg/man03.png`}
              animate={{
                rotate: [1, 0, 1, 1, -1, 0, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.img
              src={`${process.env.PUBLIC_URL}/mainImg/man04.png`}
              animate={{
                rotate: [0, -1, 0, 1, 0, -1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Man>
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Cat>
            <img src={`${process.env.PUBLIC_URL}/mainImg/cat00.png`} />
            <img src={`${process.env.PUBLIC_URL}/mainImg/cat01.png`} />
            <div>
              <img src={`${process.env.PUBLIC_URL}/mainImg/cat02.png`} />
              <img src={`${process.env.PUBLIC_URL}/mainImg/cat03.png`} />
            </div>
          </Cat>
        </Base>
      </ImgWrap>
    </Container>
  );
};

export default Main;
