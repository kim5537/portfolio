import { head } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 3000px;
  position: relative;
  background: #566688;
`;

const WaveWap = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: -100px;
  border: 1px solid #fff;
`;

const WaveInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Art = () => {
  return (
    <Wrapper>
      <WaveWap>
        <WaveInner></WaveInner>
      </WaveWap>
    </Wrapper>
  );
};

export default Art;
