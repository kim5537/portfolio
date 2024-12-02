import React, { forwardRef } from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2000px;
  overflow: hidden;
  background: url(${process.env.PUBLIC_URL}/project/back.png);
`;

const Inner = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  border: 1px solid #fff;
`;

const ProjectWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 600px;
  border: 1px solid #00f;
  bottom: 30px;
`;

const CityWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 600px;
  border: 1px solid #00f;
  bottom: 30px;
`;

const CityImg = styled.div`
  position: relative;
  height: 100%;
`;

const Project = forwardRef(function Project(props, ref) {
  return (
    <Wrapper ref={ref}>
      <Inner>
        <ProjectWrap></ProjectWrap>

        <CityWrap>
          <CityImg>
            <Img bgimg={"project/night00.png"} />
            <Img bgimg={"project/night01.png"} />
            <Img bgimg={"project/night02.png"} />
            <Img bgimg={"project/night03.png"} />
            <Img bgimg={"project/night04.png"} />
            <Img bgimg={"project/night05.png"} />
            <Img bgimg={"project/night06.png"} />
          </CityImg>
        </CityWrap>
      </Inner>
    </Wrapper>
  );
});

export default Project;
