import { head } from "framer-motion/client";
import React, { forwardRef } from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import { useMouseScroll } from "../context/usecontext";
import { Img } from "../style/imgobject";
import ArtProjectSection from "./section/ArtProjectSection";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100&;
  position: relative;
`;

const TopWave = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  /* background: #566688; */
`;

const WaveWrapBack = styled.div`
  width: 100%;
  height: 100px;
  top: -60px;
  position: absolute;
  z-index: 20;
  overflow: hidden;
`;
const WaveWrap = styled.div`
  width: 100%;
  height: 120px;
  top: -50px;
  position: absolute;
  z-index: 20;
`;

const BottomInner = styled.div`
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/art/back.png);
`;

const CityWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 700px;
  top: 0;
  pointer-events: none;
  z-index: 25;
  transform: rotate(180deg);
  opacity: 0.3;
  //background: linear-gradient(top #fff);
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 30;
    background: linear-gradient(#00000000, #21334a);
  }
`;

const CityImg = styled.div`
  width: 100%;
  height: 100%;
  .city {
    z-index: 2;
  }
  .mount {
    z-index: 1;
  }
`;

const Back = styled.div`
  width: 100vw;
  max-width: 100%;
  min-width: 1200px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: bottom left / contain
    url(${process.env.PUBLIC_URL}/project/nightback00.png) no-repeat;
`;
const Back2 = styled.div`
  width: 100vw;
  max-width: 100%;
  min-width: 1200px;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: bottom right/contain
    url(${process.env.PUBLIC_URL}/project/nightback01.png) no-repeat;
  @media (max-width: 900px) {
    filter: drop-shadow(0px 0px 12px #12152b);
  }
`;

const SeaWrap = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 1500px;
  top: 0;
  pointer-events: none;
  border: 1px solid #f00;
`;

const ArtWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 600px;
  bottom: 300px;
  z-index: 2;
`;

const Art = forwardRef(function Art(props, ref) {
  const { scrollY } = useMouseScroll();

  return (
    <Wrapper ref={ref}>
      <TopWave>
        <WaveWrapBack>
          <Wave
            fill="url(#gradientback)"
            mask="url(#maskback)"
            style={{ width: "100%", height: "100%" }}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.15,
              points: 4,
            }}
          >
            <defs>
              <linearGradient id="gradientback" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="#87C79A" />
                <stop offset="0.3" stopColor="#354653" />
              </linearGradient>
              <linearGradient id="opacity03" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="black"></stop>
                <stop offset="0.2" stopColor="white"></stop>
              </linearGradient>
              <mask id="maskback">
                <rect
                  x="0"
                  y="0"
                  width="100vw"
                  height="100%"
                  fill="url(#opacity03)"
                ></rect>
              </mask>
            </defs>
          </Wave>
        </WaveWrapBack>
        <WaveWrapBack>
          <Wave
            fill="url(#gradient)"
            mask="url(#mask)"
            style={{ width: "100%", height: "100%" }}
            options={{ amplitude: 15 }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="#73A6B1" />
                <stop offset="0.2" stopColor="#354653" />
              </linearGradient>
              <linearGradient id="opacity01" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="black"></stop>
                <stop offset="0.2" stopColor="white"></stop>
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="100vw"
                  height="100%"
                  fill="url(#opacity01)"
                ></rect>
              </mask>
            </defs>
          </Wave>
        </WaveWrapBack>
        <WaveWrap>
          <Wave
            fill="url(#imagePattern)"
            mask="url(#mask2)"
            style={{ width: "100%", height: "100%" }}
            options={{ amplitude: 6 }}
          >
            <defs>
              <pattern
                id="imagePattern"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href={`${process.env.PUBLIC_URL}/art/back.png`}
                  x="0"
                  y="0"
                  width="300"
                  height="200"
                  preserveAspectRatio="none"
                />
              </pattern>
              <linearGradient id="opacity02" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="black"></stop>
                <stop offset="0.5" stopColor="white"></stop>
              </linearGradient>
              <mask id="mask2">
                <rect
                  x="0"
                  y="0"
                  width="100vw"
                  height="100%"
                  fill="url(#opacity02)"
                ></rect>
              </mask>
            </defs>
          </Wave>
        </WaveWrap>
      </TopWave>
      <BottomInner>
        <CityWrap>
          <CityImg>
            <Back className="mount" />
            <Back2 className="mount" />
            <Img bgimg={"project/night01.png"} className="city" />
            <Img bgimg={"project/night02.png"} className="city" />
            <Img bgimg={"project/night03.png"} className="city" />
            <Img bgimg={"project/night04.png"} className="city" />
            <Img bgimg={"project/night05.png"} className="city" />
            <Img bgimg={"project/night06.png"} className="city" />
          </CityImg>
        </CityWrap>
        <ArtWrap>
          <ArtProjectSection />
        </ArtWrap>
        <SeaWrap>
          <Img
            bgimg={"art/sea00.png"}
            top={"auto"}
            bottom={"0px"}
            height={"800px"}
            styleplus={"opacity : 0.8"}
          />
          <Img
            bgimg={"art/sea01.png"}
            top={"auto"}
            bottom={"0px"}
            left={"auto"}
            right={"0px"}
            height={"800px"}
          />
        </SeaWrap>
      </BottomInner>
    </Wrapper>
  );
});

export default Art;
