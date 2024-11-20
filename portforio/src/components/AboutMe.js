import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import LightSvg from "../style/LightSvg";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 3400px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  padding-top: 2000px;
`;

const MainItem = styled.main`
  border: 1px solid;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 0.9s;
  opacity: ${(props) => (props.isInView ? 1 : 0)}; */
`;

const ImgWrap = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
`;

const Svg = styled(motion.svg)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.white};
`;

const WhitePage = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 3400px;
  background-color: aliceblue;
`;

const AboutMe = forwardRef(function AboutMe(props, ref) {
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();

  const svgAni = {
    start: { pathLength: 0 },
    end: { pathLength: 1, transition: { duration: 3, repeat: Infinity } },
  };

  return (
    <Wrapper>
      <MainItem ref={ref}>
        <ImgWrap isInView={isInView}>
          <LightSvg />
        </ImgWrap>
        <TextWrap isInView={isInView}>
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
