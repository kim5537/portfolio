import React, { forwardRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { ReactComponent as Light } from "../style/light.svg";
import lighitem from "../style/lightitem.svg";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2400px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  padding-top: 1000px;
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

const Img = styled(motion.svg)`
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
  const isInView = useInView(ref, { once: true });

  const svgAni = {
    start: { pathLength: 0 },
    end: { pathLength: 1, transition: { duration: 3 } },
  };

  return (
    <Wrapper>
      <MainItem ref={ref}>
        <ImgWrap isInView={isInView}>
          <Light variants={svgAni} initial="start" animate="end" />
          {/* <Img src={lighitem} /> */}
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
