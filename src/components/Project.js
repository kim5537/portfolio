import React, { forwardRef, useEffect, useState, useRef } from "react";
import { useMouseScroll } from "../context/usecontext";
import styled, { keyframes } from "styled-components";
import { Img } from "../style/imgobject";
import { motion, animate, useTransform, AnimatePresence } from "framer-motion";
import ProjectSection from "./section/ProjectSection";

const star = keyframes`
0% {
  opacity : 0.8;
}
50% {
  opacity :1 ;
  filter: drop-shadow(0 0 5px yellow);
}

100% {
  opacity: 0.8;
}
`;

const starLineAni = keyframes`
0% {
  opacity: 0;
  transform: translate(0px , 0px)
}
20% {
  opacity: 0.6;
  transform: translate(0px , 0px);
  filter: drop-shadow(0 0 5px yellow);
}

40% {
  opacity: 0;
  transform: translate(0px , 0px);
  filter: drop-shadow(0 0 0px inherit);
}

60% {
  opacity: 0.9;
  transform: translate(0px , 0px);
  filter: drop-shadow(0 0 5px yellow);
}
100% {
transform: translate(-300px , 200px) scale(0.3);
opacity: 0;
filter: drop-shadow(0 0 2px yellow);
}
`;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2200px;
  overflow: hidden;
  background: url(${process.env.PUBLIC_URL}/project/back.png);
  position: relative;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(transparent, #2d395398, #212c4499);
  }
`;

const Inner = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
`;

const ProjectWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 600px;
  bottom: 300px;
  z-index: 2;
`;

const CityWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 700px;
  bottom: 10px;
  pointer-events: none;
`;

const CityImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid #f00; */
  .city {
    z-index: 3;
  }
  .mount {
    z-index: 1;
  }
`;

const Back = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: center left/contain
    url(${process.env.PUBLIC_URL}/project/nightback00.png) no-repeat;
  /* border: 1px solid #0f0; */
`;
const Back2 = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: center right/contain
    url(${process.env.PUBLIC_URL}/project/nightback01.png) no-repeat;
`;

const SkyWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const SkyImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/${(props) => props.img});
  &.sky00 {
    animation: ${star} 4s 3s ease-out infinite;
  }
  &.sky01 {
    animation: ${star} 4s 2s ease-in infinite;
  }
`;

const StarLineWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const StarLine = styled.div`
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  z-index: 5;
  /* opacity: 0; */
  &.starLine1 {
    top: 50%;
    left: 30%;
    width: 5px;
    height: 5px;
    animation: 4s ${starLineAni} ease-in infinite;
  }
  &.starLine2 {
    top: 40%;
    left: 80%;
    width: 4px;
    height: 4px;
    animation: 6s ${starLineAni} ease-in infinite;
  }
  &.starLine3 {
    top: 54%;
    left: 82%;
    animation: 7s ${starLineAni} ease-in infinite;
  }
  &.starLine4 {
    top: 42%;
    left: 30%;
    width: 5px;
    height: 5px;
    animation: 5s ${starLineAni} ease-in infinite;
  }
  &.starLine5 {
    top: 62%;
    left: 82%;
    width: 4px;
    height: 4px;
    animation: 6.2s ${starLineAni} ease-in infinite;
  }
  &.starLine6 {
    top: 42%;
    left: 52%;
    width: 5px;
    height: 5px;
    animation: 3s ${starLineAni} ease-in infinite;
  }
`;

const Project = forwardRef(function Project(props, ref) {
  const speed = 0.1;
  const targetX = useRef(0);
  const { mouseX } = useMouseScroll();
  const mountRef = useRef(null);
  const mountRef2 = useRef(null);
  const cityRef00 = useRef(null);
  const cityRef01 = useRef(null);
  const cityRef02 = useRef(null);
  const cityRef03 = useRef(null);
  const cityRef04 = useRef(null);
  const cityRef05 = useRef(null);

  useEffect(() => {
    const loop = () => {
      targetX.current += (mouseX - targetX.current) * speed;
      if (mountRef.current) {
        mountRef.current.style.transform = `translateX( ${
          -targetX.current / 120
        }px)`;
      }
      if (mountRef2.current) {
        mountRef2.current.style.transform = `translateX( ${
          -targetX.current / 120
        }px)`;
      }
      if (cityRef00.current) {
        cityRef00.current.style.transform = `translateX( ${
          targetX.current / 100
        }px)`;
      }
      if (cityRef01.current) {
        cityRef01.current.style.transform = `translateX( ${
          targetX.current / 100
        }px)`;
      }
      if (cityRef02.current) {
        cityRef02.current.style.transform = `translateX( ${
          -targetX.current / 100
        }px)`;
      }
      if (cityRef03.current) {
        cityRef03.current.style.transform = `translateX( ${
          targetX.current / 80
        }px)`;
      }
      if (cityRef04.current) {
        cityRef04.current.style.transform = `translateX( ${
          targetX.current / 80
        }px)`;
      }
      if (cityRef05.current) {
        cityRef05.current.style.transform = `translateX( ${
          -targetX.current / 60
        }px)`;
      }

      requestAnimationFrame(loop);
    };
    loop();
  }, [mouseX]);

  return (
    <Wrapper ref={ref}>
      <Inner>
        <ProjectWrap>
          <ProjectSection />
        </ProjectWrap>
        <CityWrap>
          <CityImg>
            <Back ref={mountRef2} className="mount" />
            <Back2 ref={mountRef} className="mount" />
            <Img
              bgimg={"project/night01.png"}
              ref={cityRef00}
              className="city"
            />
            <Img
              bgimg={"project/night02.png"}
              ref={cityRef01}
              className="city"
            />
            <Img
              bgimg={"project/night03.png"}
              ref={cityRef02}
              className="city"
            />
            <Img
              bgimg={"project/night04.png"}
              ref={cityRef03}
              className="city"
            />
            <Img
              bgimg={"project/night05.png"}
              ref={cityRef04}
              className="city"
            />
            <Img
              bgimg={"project/night06.png"}
              ref={cityRef05}
              className="city"
            />
          </CityImg>
        </CityWrap>
        <SkyWrap>
          <SkyImg img={"project/SKY00.png"} className="sky00" />
          <SkyImg img={"project/SKY01.png"} className="sky01" />
          <StarLineWrap>
            <StarLine className="starLine1" />
            <StarLine className="starLine2" />
            <StarLine className="starLine3" />
            <StarLine className="starLine4" />
            <StarLine className="starLine5" />
            <StarLine className="starLine6" />
          </StarLineWrap>
        </SkyWrap>
      </Inner>
    </Wrapper>
  );
});

export default Project;
