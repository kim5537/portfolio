import React, { useEffect, useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import {
  delay,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Scolle from "./Scolle";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 4000px;
  overflow: hidden;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
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
  overflow: hidden;
  @media (max-width: 900px) {
    height: 100vh;
  }
`;

const WhitePaper = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 120vh;
`;

const Back = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Man = styled(motion.div)`
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    bottom: 0;
  }
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
    @media (max-width: 900px) {
      height: auto;
      width: 90vw;
      bottom: 0;
    }
  }
`;

const CatWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const Cat = styled.div`
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    bottom: 0;
  }
  & > img {
    position: absolute;
    right: -2vw;
    bottom: -22vh;
    width: auto;
    height: 138%;
    object-fit: cover;
    &:nth-child(2) {
      transform-origin: 65% 70%;
    }
    @media (max-width: 900px) {
      height: auto;
      width: 90vw;
      bottom: 0;
    }
  }
  & > div {
    img {
      position: absolute;
      right: -2vw;
      bottom: -22vh;
      width: auto;
      height: 138%;
      object-fit: cover;
      &:nth-child(1) {
        transform-origin: 34% 20%;
      }
      @media (max-width: 900px) {
        height: auto;
        width: 90vw;
        bottom: 0;
      }
    }
  }
`;

const Main = forwardRef(function Main(props, ref) {
  const { scrollYProgress, scrollY } = useScroll();

  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 4000) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    console.log(latest);
  });

  // const scaleCloud = useTransform(scrollYProgress, [0.4, 1], [1, 1.1]);
  const scaleBack = useTransform(scrollYProgress, [0.3, 1], [1, 1.1]);

  const scaleMan = useTransform(scrollYProgress, [0.1, 1], [1, 1.6]);
  const parX = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const scaleCat = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const parX01 = useTransform(scrollYProgress, [0, 1], [50, -20]);
  return (
    <Container isVisible={isVisible} ref={ref} id="main">
      <ImgWrap>
        <Base>
          <Back>
            <Img bgimg={`mainImg/back01.png`} />
            <Img
              bgimg={`mainImg/back02.png`}
              animate={{
                translateY: [-12, 18, -3, 20, -12],
              }}
              transition={{ duration: 16, repeat: Infinity }}
              top={0}
              left={"-3vw"}
            />
            <Img
              bgimg={`mainImg/back03.png`}
              animate={{
                translateY: [0, 27, 3, 0, -20, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
              }}
              top={0}
              left={0}
            />
            <Img
              bgimg={`mainImg/back04.png`}
              animate={{
                translateY: [-10, 0, 2, -10, 2, -10],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              stylePlus={`transform: translatey(-40px)`}
            />
            <Img
              bgimg={`mainImg/back05.png`}
              animate={{
                translateY: [-140, -90, -100, -110, -120],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
            />
            <Img
              bgimg={`mainImg/back06.png`}
              animate={{ translateY: [-40, -30, -24, -18, -40] }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
            />
          </Back>
        </Base>
      </ImgWrap>
      <ImgWrap>
        <Base>
          <Back style={{ scale: scaleBack }}>
            <Img bgimg={`mainImg/back00.png`} top={0} left={0}></Img>
            <Img bgimg={`mainImg/obj00.png`} />
            <Img bgimg={`mainImg/obj01.png`} />
            <Img bgimg={`mainImg/obj02.png`} />
            <Img bgimg={`mainImg/obj03.png`} />
            <Img
              bgimg={`mainImg/obj05.png`}
              top={"-10px"}
              animate={{ rotate: [2, -1, 0, -1, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              stylePlus={`transform-origin: 60%  0%`}
            />
            <Img
              bgimg={`mainImg/back07.png`}
              media="top: auto; bottom: 0; height: 70vh;"
            />
          </Back>
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
              <motion.img
                src={`mainImg/cat01.png`}
                animate={{ rotate: [12, 0, -1, 12] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div>
                <motion.img
                  src={`mainImg/cat02.png`}
                  animate={{ rotate: [12, 1, 24, 4, 10, 12] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img src={`mainImg/cat03.png`} />
              </div>
            </Cat>
          </CatWrap>
        </Base>
      </ImgWrap>
      <Scolle />
      <WhitePaper
        style={{
          opacity: useTransform(scrollYProgress, [0.4, 1], [0, 1]),
          backgroundColor: useTransform(
            scrollYProgress,
            [0, 1],
            ["#fff", "#fff"]
          ),
        }}
      />
    </Container>
  );
});

export default Main;
