import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { ArrowLeft, ArrowRight } from "../../style/imgobject";
import Wave from "react-wavify";
import { useMobile } from "../../context/usecontext";

const ProjectInner = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    margin-top: 100px;
  }
`;

const CategoryWrap = styled.div`
  max-width: 940px;
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  gap: 8px;
  @media (max-width: 900px) {
    margin-bottom: 18px;
    margin-right: ${(props) => (props.minProject ? "180px" : " 0px")};
  }
`;

const CategoryItem = styled.div`
  /* background-color: ${(props) => (props.active ? "#A2A7AA" : "#222")}; */
  padding: 4px 2px;
  border-radius: 6px;
  min-width: 60px;
  text-align: center;
  color: ${(props) => props.theme.color.darkGray};
  filter: ${(props) =>
    props.check ? " drop-shadow(0px 0px 2px #A2A7AA)" : "none"};
  font-weight: ${(props) => (props.check ? " 800" : "nomal")};
`;

const SliderWrap = styled.div`
  position: relative;
`;

const SlideItemWrap = styled.div`
  position: relative;
  width: 940px;
  height: 420px;
  @media (max-width: 900px) {
    min-width: 300px;
    width: 100%;
    height: ${(props) => (props.minProject ? "200px" : " 940px")};
  }
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
  @media (max-width: 900px) {
    height: 50%;
    grid-template-columns: ${(props) =>
      props.minProject ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
  }
`;

const ProjectItem = styled(motion.div)`
  width: ${(props) => (props.minProject ? "100%" : " 300px")};
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
  filter: drop-shadow(0px 0px 3px #a2a7aa);
  cursor: pointer;
  margin-top: 0px;
  @media (max-width: 900px) {
    margin-top: ${(props) => (props.minProject ? "0px" : " -500px")};
  }
`;

const ToggleRight = styled.div`
  margin-left: 20px;
  filter: drop-shadow(0px 0px 3px #a2a7aa);
  @media (max-width: 900px) {
    margin-top: ${(props) => (props.minProject ? "0px" : " -500px")};
  }
`;

const ProjectSection = ({ setModalOpen, setTargetId }) => {
  const [Projectsdata, seProjectsdata] = useState(data.projects);
  const [datas, setdatas] = useState(data.projects);
  const [prevFillter, setprevFillter] = useState("");
  const [dataIndex, setDataIndex] = useState(0);
  const [offset, setOffset] = useState(6);
  const [slideEnd, setSlideEnd] = useState(false);
  const [right, setRight] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const { mobile, minProject } = useMobile();
  const [maxIndex, setMaxIndex] = useState(0);

  const toggleProject = () => {
    setSlideEnd((prev) => !prev);
  };

  useEffect(() => {
    if (mobile && !minProject) {
      setOffset(4);
    } else if (mobile && minProject) {
      setOffset(1);
    } else {
      setOffset(6);
    }
  }, [mobile, minProject]);

  useEffect(() => {
    const projectLength = datas.length;
    const maxIndexResult = Math.ceil(projectLength / offset - 1);
    setMaxIndex(maxIndexResult);
  }, [dataIndex]);

  const toggleFn = (text) => {
    setSlideEnd(true);
    if (text === "right") {
      setRight(true);
      setDataIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
    if (text === "left") {
      setRight(false);
      setDataIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const typeFillter = (num) => {
    if (num === prevFillter) {
      setdatas(Projectsdata);
      setActiveFilter(0);
      setprevFillter(0);
    } else {
      setActiveFilter(num);
      setDataIndex(0);
      const fillterdata = Projectsdata.filter(
        (project) => project.mainNum === num
      );
      setdatas(fillterdata);
      setprevFillter(num);
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
    <ProjectInner minProject={minProject}>
      <CategoryWrap minProject={minProject}>
        <CategoryItem check={activeFilter === 1} onClick={() => typeFillter(1)}>
          JS
        </CategoryItem>
        <CategoryItem check={activeFilter === 2} onClick={() => typeFillter(2)}>
          React
        </CategoryItem>
        <CategoryItem check={activeFilter === 3} onClick={() => typeFillter(3)}>
          TS
        </CategoryItem>
      </CategoryWrap>
      <SliderWrap>
        <ToggleWrap>
          <ToggleLeft onClick={() => toggleFn("left")} minProject={minProject}>
            <ArrowLeft fill={"#a2a7aa"} size={"20px"} />
          </ToggleLeft>
          <AnimatePresence
            initial={false}
            custom={right}
            variants={toggleProject}
          >
            <SlideItemWrap className="SlideItemWrap" minProject={minProject}>
              <ProjectFix minProject={minProject}>
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
                      minProject={minProject}
                    >
                      {project.title} ||
                      {project.people} ||
                      {project.main}
                    </ProjectItem>
                  ))}
              </ProjectFix>
            </SlideItemWrap>
          </AnimatePresence>
          <ToggleRight
            onClick={() => toggleFn("right")}
            minProject={minProject}
          >
            <ArrowRight fill={"#a2a7aa"} size={"20px"} />
          </ToggleRight>
        </ToggleWrap>
      </SliderWrap>
    </ProjectInner>
  );
};

export default ProjectSection;
