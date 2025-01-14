import { head } from "framer-motion/client";
import React, { forwardRef } from "react";
import Wave from "react-wavify";
import styled from "styled-components";
import { useMouseScroll } from "../context/usecontext";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 3000px;
  position: relative;
`;

const TopWave = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  background: #566688;
`;

const WaveWrap = styled.div`
  width: 100%;
  height: 60px;
  top: -50px;
  position: absolute;
  z-index: 20;
`;

const BottomInner = styled.div`
  width: 100%;
  height: 100%;
  background: #566688;
`;

const Art = forwardRef(function Art(props, ref) {
  const { scrollY } = useMouseScroll();

  return (
    <Wrapper ref={ref}>
      <TopWave>
        <WaveWrap>
          <Wave
            fill="url(#gradient)"
            mask="url(#mask)"
            style={{ width: "100%", height: "100%" }}
            options={{ amplitude: 10 }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="blue" />
                <stop offset="0.5" stopColor="#566688" />
              </linearGradient>
              <linearGradient id="opacity01" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="black"></stop>
                <stop offset="0.5" stopColor="white"></stop>
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
        </WaveWrap>
        <WaveWrap>
          <Wave
            fill="url(#gradient2)"
            mask="url(#mask2)"
            style={{ width: "100%", height: "100%" }}
            options={{ amplitude: 7 }}
          >
            <defs>
              <linearGradient id="gradient2" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="red" />
                <stop offset="0.5" stopColor="#566688" />
              </linearGradient>
              <linearGradient id="opacity02" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="black"></stop>
                <stop offset="0.6" stopColor="gray"></stop>
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
      <BottomInner></BottomInner>
    </Wrapper>
  );
});

export default Art;
