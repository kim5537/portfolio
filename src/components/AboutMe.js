import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
// import LightSvg from "../style/LightSvg";
import { Img } from "../style/imgobject";
import Light from "../style/Light";
import LightItem from "../style/LightItem";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2000px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  padding-top: 1000px;
  overflow: hidden;
`;

const MainItem = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
  svg {
    position: absolute;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.white};
`;

const AboutMe = forwardRef(function AboutMe(props, ref) {
  const aniRef = useRef();
  const isvisible = useInView(aniRef, { once: true });
  const [animatePaths, setAnimatePaths] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {});
  useEffect(() => {
    console.log("isvisible", isvisible);
    setAnimatePaths(true);
  }, [isvisible]);

  return (
    <Wrapper>
      <MainItem ref={ref}>
        <ImgWrap>
          <LightItem animatePaths={animatePaths} ref={aniRef} />
          <Light animatePaths={animatePaths} ref={aniRef} />
        </ImgWrap>
        <TextWrap isvisible={isvisible ? "visible" : "hidden"}>
          <div>웹사이트를 드로잉하는 Front End!</div>
          <div>긍정적인 소통과 열린 사고로</div>
          <div>팀에 기여하는 열정있는</div>
          <div>신입 Front End 개발자가 되겠습니다!</div>
        </TextWrap>
      </MainItem>
    </Wrapper>
  );
});

export default AboutMe;
