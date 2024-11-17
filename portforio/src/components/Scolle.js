import React from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrap = styled(motion.div)`
  width: 13vw;
  height: 13vw;
  border: 1px solid #f00;
`;

const CurcleText = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: center/contain
    url(${process.env.PUBLIC_URL}/mainImg/curveText.png) no-repeat;
`;

const Text = styled.div`
  font-size: 24px;
  font-family: ${(props) => props.theme.font.title};
`;

const Scolle = () => {
  const scroll = useScroll();
  console.log(scroll);
  return (
    <Wrapper>
      <ImgWrap>
        <CurcleText
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </ImgWrap>
      <Text>모든 그림 소재는 전부 직접 드로잉한 소재입니다!</Text>
    </Wrapper>
  );
};

export default Scolle;
