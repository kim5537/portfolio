import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { ArrowLeft, ArrowRight } from "../../style/imgobject";
import Wave from "react-wavify";

const ProjectInner = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CategoryWrap = styled.div`
  width: 940px;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  gap: 8px;
`;

const CategoryItem = styled.div`
  /* background-color: ${(props) => (props.active ? "#A2A7AA" : "#222")}; */
  padding: 4px 2px;
  border-radius: 6px;
  min-width: 60px;
  text-align: center;
  color: ${(props) => props.theme.color.darkGray};
  filter: ${(props) =>
    props.active ? " drop-shadow(0px 0px 2px #A2A7AA)" : "none"};
  font-weight: ${(props) => (props.active ? " 800" : "nomal")};
`;

const SliderWrap = styled.div`
  position: relative;
`;

const SlideWrap = styled.div`
  position: relative;
  width: 940px;
  height: 420px;
  /* overflow: hidden; */
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
`;

const ProjectItem = styled(motion.div)`
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
  margin-right: 20px;
  //margin-bottom: 200px;
  filter: drop-shadow(0px 0px 3px #a2a7aa);
`;

const ToggleRight = styled.div`
  margin-left: 20px;
  //margin-bottom: 200px;
  filter: drop-shadow(0px 0px 3px #a2a7aa);
`;

const ProjectSection = ({ setModalOpen, setTargetId }) => {
  const [Projectsdata, seProjectsdata] = useState(data.projects);
  const [datas, setdatas] = useState(data.projects);
  const [prevFillter, setprevFillter] = useState("");
  const [dataIndex, setDataIndex] = useState(0);
  const [offset, setOffset] = useState(6);
  const [slideEnd, setSlideEnd] = useState(false);
  const [right, setRight] = useState(false);
  const [activeFilter, setActiveFilter] = useState("full");

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
      setActiveFilter("full");
      setprevFillter("full");
    } else {
      setActiveFilter(text);
      setDataIndex(0);
      const fillterdata = Projectsdata.filter(
        (project) => project.main === text
      );
      setdatas(fillterdata);
      setprevFillter(text);
    }
  };

  const handleModal = (id) => {
    setTargetId(id);
    setModalOpen(true);
  };

  const animeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <ProjectInner>
      <CategoryWrap>
        <CategoryItem
          $active={activeFilter === "javaScript"}
          onClick={() => typeFillter("javaScript")}
        >
          JS
        </CategoryItem>
        <CategoryItem
          $active={activeFilter === "react"}
          onClick={() => typeFillter("react")}
        >
          React
        </CategoryItem>
        <CategoryItem
          $active={activeFilter === "typeScript"}
          onClick={() => typeFillter("typeScript")}
        >
          TS
        </CategoryItem>
      </CategoryWrap>
      <SliderWrap>
        <ToggleWrap>
          <ToggleLeft onClick={() => toggleFn("left")}>
            <ArrowLeft fill={"#a2a7aa"} size={"20px"} />
          </ToggleLeft>
          <AnimatePresence
            initial={false}
            custom={right}
            variants={toggleProject}
          >
            <SlideWrap>
              <ProjectFix>
                {datas
                  .slice(dataIndex * offset, dataIndex * offset + offset)
                  .map((project) => (
                    <ProjectItem
                      key={`Project-${project.id}`}
                      variants={animeVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 3 }}
                      onClick={() => handleModal(project.id)}
                    >
                      {project.title} ||
                      {project.people} ||
                      {project.main}
                    </ProjectItem>
                  ))}
              </ProjectFix>
            </SlideWrap>
          </AnimatePresence>
          <ToggleRight onClick={() => toggleFn("right")}>
            <ArrowRight fill={"#a2a7aa"} size={"20px"} />
          </ToggleRight>
        </ToggleWrap>
      </SliderWrap>
    </ProjectInner>
  );
};

export default ProjectSection;
