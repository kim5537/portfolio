import React, { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2000px;
  overflow: hidden;
  background: url(${process.env.PUBLIC_URL}/project/back.png);
`;

const Project = forwardRef(function Project(props, ref) {
  return <Wrapper ref={ref}></Wrapper>;
});

export default Project;
