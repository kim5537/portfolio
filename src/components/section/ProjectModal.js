import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { filter } from "lodash";
import { feDropShadow } from "framer-motion/client";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 600px;
  transform: translate(-50%, -50%);
  z-index: 40;
  border: 1px solid #f00;
`;
const ModalWrap2 = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 600px;
  transform: translate(-50%, -50%);
  z-index: 40;
  background-color: #fff;
  border-radius: 18px;
  padding: 20px 30px;
`;
const Modal = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 18px;
  padding: 20px 30px;
`;

const ProjectModal = ({ modalOpen, setModalOpen, targetId }) => {
  const projects = data.projects;
  const selectProject = targetId
    ? projects.find((project) => project.id === targetId)
    : null;
  const modalVariants = {
    initial: {
      opacity: 0,
      y: "-56%",
      x: "-50%",
      scale: 0.7,
      filter: "drop-shadow(0px 0px 30px #ffffff00)",
    },
    visible: {
      opacity: 1,
      y: "-50%",
      x: "-50%",
      scale: 0.7,
      filter: "drop-shadow(0px 0px 30px #ffffff50)",
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: "-56%",
      x: "-50%",
      scale: 0.7,
      filter: "drop-shadow(0px 0px 30px #ffffff00)",
    },
  };

  return (
    <Wrapper className="ProjectModal">
      <AnimatePresence initial={false}>
        {modalOpen && targetId && (
          <ModalWrap2
            key={`${targetId}-modal${modalOpen}`}
            variants={modalVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            확인용 {targetId}
            <div onClick={() => setModalOpen(false)}>닫기</div>
            <h1>{selectProject.title}</h1>
          </ModalWrap2>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectModal;
