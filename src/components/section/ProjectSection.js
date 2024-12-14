import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Projects } from "../../data";

const ProjectInner = styled.div`
  position: relative;
`;

const ProjectFix = styled.div`
  position: absolute;
  max-width: 920px;
  max-height: 420px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ProjectItem = styled.div`
  width: 300px;
  height: 200px;
  background-color: aliceblue;
  box-shadow: 0px 0px 14px #fff;
  position: relative;
  border-radius: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000060;
    border-radius: 10px;
  }
`;

const ToggleBTnWrap = styled.div``;
const ToggleLeft = styled.div``;
const ToggleRight = styled.div``;

const ProjectSection = () => {
  const [datas, setdatas] = useState(Projects);
  const [offset, setOffset] = useState(6);
  const [slideEnd, setSlideEnd] = useState(false);
  const [left, setleft] = useState(false);

  const toggleProject = () => {
    setSlideEnd((prev) => !prev);
  };

  const toggleFn = () => {
    const projectLength = datas.length;
  };

  return (
    <ProjectInner>
      <AnimatePresence variants={toggleProject}>
        <ProjectFix>
          {datas.map((data) => (
            <ProjectItem key={data.id} {...data}>
              {data.title}
            </ProjectItem>
          ))}
        </ProjectFix>
      </AnimatePresence>
      <ToggleBTnWrap>
        <ToggleLeft onClick={() => toggleFn("left")} />
        <ToggleRight onClick={() => toggleFn("right")} />
      </ToggleBTnWrap>
    </ProjectInner>
  );
};

export default ProjectSection;
