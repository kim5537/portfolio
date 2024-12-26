import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import AboutMe2 from "../components/AboutMe2";
import Skill2 from "../components/Skill2";
import Project from "../components/Project";
import Art from "../components/Art";

const Section01 = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 0px;
  position: relative;
  width: 100vw;
  max-width: 100%;
`;

const TreeBack = styled.div`
  height: auto;
  width: 100vw;
  max-width: 100%;
  img {
    position: absolute;
    top: 0px;
    width: 100vw;
    max-width: 100%;
    z-index: 6;
  }
`;

const Tree = styled.div`
  height: auto;
  img {
    position: absolute;
    top: -100px;
    right: -10vw;
    width: 60vw;
    transform: rotate(-10deg);
    z-index: 10;
  }
`;

const Tree2 = styled.div`
  height: auto;
  img {
    position: absolute;
    top: -40px;
    left: -10vw;
    width: 70vw;
    transform: rotate(12deg);
    z-index: 10;
  }
`;

const Home = ({ navTarget }) => {
  const mainRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const artRef = useRef();
  const navPages = {
    Main: mainRef,
    AboutMe: aboutRef,
    Skill: skillRef,
    Project: projectRef,
    Art: artRef,
  };

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
      <Skill2 ref={skillRef} />
      <Section01>
        <TreeBack>
          <img
            src={`${process.env.PUBLIC_URL}/section/back00.png`}
            alt="back"
          />
        </TreeBack>
        <Tree>
          <img
            src={`${process.env.PUBLIC_URL}/section/tree00.png`}
            alt="tree"
          />
        </Tree>
        <Tree2>
          <img
            src={`${process.env.PUBLIC_URL}/section/tree01.png`}
            alt="tree"
          />
        </Tree2>
      </Section01>
      <Project ref={projectRef} />
      <Art ref={artRef} />
    </>
  );
};

export default Home;
