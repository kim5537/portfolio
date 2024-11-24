import React, { forwardRef } from "react";
import styled from "styled-components";
import { motion, useInView, useScroll } from "framer-motion";
import LightSvg from "../style/LightSvg";
import { Img } from "../style/imgobject";

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

const AboutMe = forwardRef(function AboutMe(props, ref) {
  const isvisible = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();

  const svgAni = {
    start: { pathLength: 0 },
    end: { pathLength: 1, transition: { duration: 3, repeat: Infinity } },
  };

  return (
    <Wrapper>
      <MainItem ref={ref}>
        {/* <ImgWrap isInView={isInView}>
          <LightSvg />
        </ImgWrap> */}
        <ImgWrap>
          <Img bgimg={`aboutImg/mockLight.png`} />
        </ImgWrap>
        <TextWrap isvisible={isvisible}>
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
