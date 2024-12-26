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
  gap: 30px;
`;

const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.white};
`;

const Marking = styled.div`
  position: absolute;
  width: 300px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.woodColor};
  opacity: 0.7;
`;

const AboutMe = forwardRef(function AboutMe(props, ref) {
  const aniRef = useRef();
  const isvisible = useInView(aniRef, { once: true });
  const [animatePaths, setAnimatePaths] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {});

  useEffect(() => {
    if (isvisible) {
      setAnimatePaths(true);
    }
  }, [isvisible]);

  return (
    <Wrapper>
      <MainItem ref={ref}>
        <ImgWrap ref={aniRef}>
          <LightItem animatePaths={animatePaths} />
          <Light animatePaths={animatePaths} />
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
