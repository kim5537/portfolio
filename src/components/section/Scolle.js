import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrap = styled(motion.div)`
  width: 13vw;
  height: 13vw;
  @media (max-width: 900px) {
    width: 40vw;
    height: 40vw;
  }
`;

const CurcleText = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: center/contain
    url(${process.env.PUBLIC_URL}/mainImg/curveText.png) no-repeat;
  position: relative;
`;

const Text = styled.div`
  font-size: 2rem;
  font-family: ${(props) => props.theme.font.title};
  color: ${(props) => props.theme.color.white};
  -webkit-text-stroke: 3px ${(props) => props.theme.color.mainDark};
  margin-top: 16px;
  @media (max-width: 900px) {
    font-size: 1rem;
    -webkit-text-stroke: 2px ${(props) => props.theme.color.mainDark};
  }
  &::before {
    position: absolute;
    content: "모든 이미지는 전부 직접 드로잉한 소재입니다!";
    -webkit-text-stroke: 0px;
  }
`;

const Scolle = () => {
  const { scrollYProgress } = useScroll();
  return (
    <Wrapper>
      <Wrap
        style={{
          scale: useTransform(scrollYProgress, [0.2, 1], [1, 1.4]),
          opacity: useTransform(scrollYProgress, [0.2, 1], [1, 0]),
        }}
      >
        <ImgWrap>
          <CurcleText
            animate={{ rotate: [0, 359] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
        </ImgWrap>
        <Text>모든 이미지는 전부 직접 드로잉한 소재입니다!</Text>
      </Wrap>
    </Wrapper>
  );
};

export default Scolle;
