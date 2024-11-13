import React from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import { motion, useScroll, useTransform } from "framer-motion";

const Container = styled.div`
  height: 400vh;
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

const Man = styled(motion.div)`
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
  width: 138%;
  height: 138%;
  & > img {
    position: absolute;
    right: -2vw;
    bottom: -22vh;
    width: auto;
    height: 138%;
    object-fit: cover;
  }
  & > div {
    img {
      position: absolute;
      right: -2vw;
      bottom: -22vh;
      width: auto;
      height: 138%;
      object-fit: cover;
    }
  }
`;

const Window = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  opacity: 0.6;
`;

const Main = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  const scaleMan = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const parX = useTransform(scrollYProgress, [0, 1], [1, 200]);
  return (
    <Container>
      <ImgWrap>
        <Base>
          <Img bgImg={`mainImg/back01.png`}></Img>
          <Img
            bgImg={`mainImg/back02.png`}
            stylePlus={`transform: translateX(100px)`}
          ></Img>
          <Img bgImg={`mainImg/back03.png`}></Img>
          <Img
            bgImg={`mainImg/back04.png`}
            stylePlus={`transform: translatey(-40px)`}
          ></Img>
          <Img bgImg={`mainImg/back05.png`}></Img>
          <Img bgImg={`mainImg/back00.png`} top={0} left={0}></Img>
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Img bgImg={`mainImg/obj00.png`} />
          <Img bgImg={`mainImg/obj01.png`} />
          <Img bgImg={`mainImg/obj02.png`} />
          <Img bgImg={`mainImg/obj03.png`} />
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Man alt="human" style={{ scale: scaleMan, x: parX }}>
            <img src={`mainImg/man01.png`} />
            <img src={`mainImg/man00.png`} />
            <motion.img
              src={`mainImg/man03.png`}
              animate={{
                rotate: [1, 0, 1, 1, -1, 0, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.img
              src={`mainImg/man04.png`}
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
            <img src={`mainImg/cat00.png`} />
            <img src={`mainImg/cat01.png`} />
            <div>
              <img src={`mainImg/cat02.png`} />
              <img src={`mainImg/cat03.png`} />
            </div>
          </Cat>
        </Base>
      </ImgWrap>
      <ImgWrap>
        {/* <Base>
          <Window />
          <Img bgImg={`mainImg/start00.png`} />
        </Base> */}
      </ImgWrap>
    </Container>
  );
};

export default Main;
