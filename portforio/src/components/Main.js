import React, { useEffect } from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import { delay, motion, useScroll, useTransform } from "framer-motion";

const Container = styled.div`
  height: 700vh;
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

const CatWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const Cat = styled.div`
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

const Main = () => {
  const { scrollYProgress } = useScroll();
  const cloud00 = useTransform(scrollYProgress, [0, 1], [0, -1300]);

  const scaleMan = useTransform(scrollYProgress, [0.3, 1], [1, 1.6]);
  const parX = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const scaleCat = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const parX01 = useTransform(scrollYProgress, [0, 1], [50, 200]);
  return (
    <Container>
      <ImgWrap>
        <Base>
          <Img bgImg={`mainImg/back01.png`}></Img>
          <Img
            bgImg={`mainImg/back02.png`}
            animate={{
              translateX: [100, -1200],
              translateY: [0, 18, 3, 15, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          ></Img>
          <Img
            bgImg={`mainImg/back03.png`}
            animate={{
              translateX: [600, -600],
              translateY: [0, 27, 3, 30, 0],
            }}
            transition={{ duration: 32, repeat: Infinity }}
          ></Img>
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
          <CatWrap style={{ scale: scaleCat, x: parX01 }}>
            <Cat alt="cat">
              <img src={`mainImg/cat00.png`} />
              <img src={`mainImg/cat01.png`} />
              <div>
                <img src={`mainImg/cat02.png`} />
                <img src={`mainImg/cat03.png`} />
              </div>
            </Cat>
          </CatWrap>
        </Base>
      </ImgWrap>
    </Container>
  );
};

export default Main;
