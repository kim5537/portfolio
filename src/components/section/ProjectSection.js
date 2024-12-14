import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Projects } from "../../data";
import { data } from "framer-motion/client";

const ProjectInner = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryWrap = styled.div`
  width: 940px;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  gap: 8px;
  & > div {
    background: #fff;
    padding: 4px 2px;
    border-radius: 6px;
    min-width: 60px;
    text-align: center;
  }
`;

const SliderWrap = styled.div`
  position: relative;
`;

const SlideWrap = styled.div`
  position: relative;
  width: 940px;
  height: 420px;
  overflow: hidden;
`;

const ProjectFix = styled(motion.div)`
  position: absolute;
  /* max-width: 920px;
  max-height: 420px; */
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  border: 1px solid #f00;
`;

const ProjectItem = styled.div`
  width: 300px;
  height: 200px;
  background-color: aliceblue;
  box-shadow: 0px 0px 14px #fff;
  position: relative;
  border-radius: 10px;
  z-index: 20;
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

const ToggleWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleLeft = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ffffff60;
`;

const ToggleRight = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ffffff60;
`;

const ProjectSection = () => {
  const [Projectsdata, seProjectsdata] = useState(Projects);
  const [datas, setdatas] = useState(Projects);
  const [prevFillter, setprevFillter] = useState("");
  const [dataIndex, setDataIndex] = useState(0);
  const [offset, setOffset] = useState(6);
  const [slideEnd, setSlideEnd] = useState(false);
  const [right, setRight] = useState(false);

  const toggleProject = () => {
    setSlideEnd((prev) => !prev);
  };

  const toggleFn = (text) => {
    setSlideEnd(true);
    const projectLength = datas.length;
    const maxIndex = Math.ceil(projectLength / offset - 1);
    if (text === "right") {
      setRight(true);
      setDataIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
    if (text === "left") {
      setRight(false);
      setDataIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const typeFillter = (text) => {
    if (text === prevFillter) {
      setdatas(Projectsdata);
      setprevFillter("full");
    } else {
      const fillterdata = Projectsdata.filter(
        (project) => project.main === text
      );
      setdatas(fillterdata);
      setprevFillter(text);
    }
  };

  const animeVariants = {
    hidden: (custom) => ({
      x: custom ? 940 + 10 : 940 - 10,
    }),
    // hidden: { opacity: 0 },
    visible: {
      // x: 0,
      opacity: 1,
    },
    exit: (custom) => ({
      x: custom ? 940 - 10 : 940 + 10,
    }),
    // exit: {
    //   opacity: 0,
    // },
  };

  return (
    <ProjectInner>
      <CategoryWrap>
        <div onClick={() => typeFillter("javaScript")}>JS</div>
        <div onClick={() => typeFillter("react")}>React</div>
        <div onClick={() => typeFillter("typeScript")}>TS</div>
      </CategoryWrap>
      <SliderWrap>
        <ToggleWrap>
          <ToggleLeft onClick={() => toggleFn("left")}> 왼 </ToggleLeft>
          <AnimatePresence
            initial={false}
            custom={right}
            variants={toggleProject}
          >
            <SlideWrap>
              <ProjectFix
                variants={animeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 3 }}
              >
                {datas
                  .slice(dataIndex * offset, dataIndex * offset + offset)
                  .map((project) => (
                    <ProjectItem
                      key={`Project-${project.id}`}
                      onClick={() => toggleFn("확인")}
                    >
                      {project.title} ||
                      {project.people} ||
                      {project.main}
                    </ProjectItem>
                  ))}
              </ProjectFix>
            </SlideWrap>
          </AnimatePresence>
          <ToggleRight onClick={() => toggleFn("right")}>오</ToggleRight>
        </ToggleWrap>
      </SliderWrap>
    </ProjectInner>
  );
};

export default ProjectSection;
