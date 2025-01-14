import { animate, AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { filter, initial } from "lodash";
import { div, feDropShadow } from "framer-motion/client";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ModalPosition = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 40;
`;

const Modal = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 800px;
  transform: translate(-50%, -50%);
`;

const ModalWrap1 = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 800px;
  background-color: #fff;
  border-radius: 18px;
  padding: 36px 42px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: start;
`;

const ProjectTitle = styled.h1``;

const ImgWrap = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    top: 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#00000000, #00000050);
  }
`;

const ModalWrap2 = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  background-color: #ccc;
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
      y: "-46%",
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
      y: "-46%",
      x: "-50%",
      scale: 0.7,
      filter: "drop-shadow(0px 0px 30px #ffffff00)",
    },
  };

  const modalSection = {
    initial: (custom) => ({
      opacity: custom === "01" ? "1" : "0",
      x: "0",
      y: custom === "01" ? "0" : " calc( 50% + 10px)",
    }),
    animate: (custom) => ({
      x: custom === "01" ? "calc(-20% )" : "calc( 20% )",
      y: custom === "01" ? "0" : " calc( 50% + 10px)",
      opacity: "1",
      transition: {
        x: { duration: 0.7, delay: 0.5, ease: "linear" },
        y: { duration: 0.7, delay: 0.5, ease: "linear" },
        opacity: { duration: 0.7, delay: 0.7, ease: "easeOut" },
      },
    }),
  };

  return (
    <Wrapper className="ProjectModal">
      <AnimatePresence initial={false}>
        {modalOpen && targetId ? (
          <ModalPosition>
            <Modal
              key={`${targetId}-modal${modalOpen}`}
              variants={modalVariants}
              initial="initial"
              animate="visible"
              exit="exit"
            >
              <ModalWrap1
                className="modal01"
                variants={modalSection}
                initial="initial"
                animate="animate"
                custom={"01"}
              >
                <ProjectTitle>{selectProject.title}</ProjectTitle>
                <ImgWrap>
                  <img src={`${process.env.PUBLIC_URL}${selectProject.img}`} />
                </ImgWrap>
              </ModalWrap1>
              <ModalWrap2
                className="modal02"
                variants={modalSection}
                initial="initial"
                animate="animate"
                custom={"02"}
              >
                <div onClick={() => setModalOpen(false)}>닫기</div>
                <h2>{selectProject.main}</h2>
                <div>{selectProject.sub}</div>
                <h2>{selectProject.people}</h2>
                <ul>
                  {selectProject.rate.map((item, index) => (
                    <li key={index}>
                      {/* {Object.entries(item).map(([key, value], i) => (
                        <div key={i}>
                          {key}: {value}
                        </div>
                      ))} */}
                    </li>
                  ))}
                </ul>
              </ModalWrap2>
            </Modal>
          </ModalPosition>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectModal;
