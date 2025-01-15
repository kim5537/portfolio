import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import AboutMe2 from "../components/AboutMe2";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Art from "../components/Art";
import { useMouseScroll } from "../context/usecontext";
import { useScroll, motion, useTransform } from "framer-motion";

const Section01 = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 0px;
  position: relative;
  top: 0;
  z-index: 10;
`;

const Tree = styled.div`
  img {
    position: absolute;
    top: -170px;
    right: -10vw;
    width: 60vw;
    transform: rotate(-10deg);
    z-index: 10;
    pointer-events: none;
    @media (max-width: 900px) {
      width: 130vw;
      right: -16vw;
    }
  }
`;

const Tree2 = styled.div`
  img {
    position: absolute;
    top: 100px;
    left: -12vw;
    width: 70vw;
    transform: rotate(12deg);/    z-index: 10;
    pointer-events: none;
    @media (max-width: 900px) {
      width: 110vw;
      left: -14vw;
      top: 300px;
    }
  }
`;

const TreeBack = styled.div`
  height: auto;
  width: 100vw;
  max-width: 100%;

  img {
    width: 100vw;
    object-fit: cover;
  }
`;

const Home = ({ navTarget }) => {
  const mainRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const artRef = useRef();
  const Section01Ref = useRef(null);
  const navPages = {
    Main: mainRef,
    AboutMe: aboutRef,
    Skill: skillRef,
    Project: projectRef,
    Art: artRef,
  };
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!navTarget) {
      // console.warn("nav를 사용하기 전 입니다.");
      return;
    }

    const sectionRef = navPages[navTarget];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`nav error: ${navTarget}`);
    }
  }, [navTarget]);

  return (
    <>
      <Main ref={mainRef} />
      <AboutMe ref={aboutRef} />
      <AboutMe2 />
      <Skill ref={skillRef} />
      <Section01 ref={Section01Ref}>
        <TreeBack>
          <img
            src={`${process.env.PUBLIC_URL}/section/back00.png`}
            alt="back"
          />
        </TreeBack>
        <Tree>
          <motion.img
            src={`${process.env.PUBLIC_URL}/section/tree00.png`}
            alt="tree"
            style={{
              rotate: "-10deg",
              x: 0,
              y: useTransform(scrollYProgress, [0, 0.2], [-100, 100]),
            }}
          />
        </Tree>
        <Tree2>
          <motion.img
            src={`${process.env.PUBLIC_URL}/section/tree01.png`}
            alt="tree"
            style={{
              rotate: "12deg",
              x: 0,
              y: useTransform(scrollYProgress, [0, 0.2], [0, 300]),
            }}
          />
        </Tree2>
      </Section01>
      <Project ref={projectRef} />
      <Art ref={artRef} />
    </>
  );
};

export default Home;
