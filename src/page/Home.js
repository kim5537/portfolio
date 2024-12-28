import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import AboutMe2 from "../components/AboutMe2";
import Skill2 from "../components/Skill2";
import Project from "../components/Project";
import Art from "../components/Art";

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
      <Project ref={projectRef} />
      <Art ref={artRef} />
    </>
  );
};

export default Home;
