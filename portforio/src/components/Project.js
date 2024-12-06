import React, { forwardRef, useEffect, useState, useRef } from "react";
import { useMouseScroll } from "../context/usecontext";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import { motion, animate, useTransform } from "framer-motion";
const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2200px;
  overflow: hidden;
  background: url(${process.env.PUBLIC_URL}/project/back.png);
  position: relative;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(transparent, #2d395398, #212c4499);
  }
`;

const Inner = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
`;

const ProjectWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 600px;
  /* border: 1px solid #00f; */
  bottom: 300px;
`;

const ProjectFix = styled.div`
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

const CityWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 700px;
  bottom: 70px;
`;

const CityImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Back = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: center left/contain
    url(${process.env.PUBLIC_URL}/project/nightback00.png) no-repeat;
`;
const Back2 = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: center right/contain
    url(${process.env.PUBLIC_URL}/project/nightback01.png) no-repeat;
`;

const Projects = [
  {
    id: 1,
    title: "캐릭터 능력치 홈페이지",
    desc: "chackbox와 label을 활용한 이벤트",
    main: "javaScript",
    sub: "none",
    people: "Personal",
  },
  {
    id: 2,
    title: "제품홍보 홈페이지",
    desc: "여러 기업들의 제품 페이지를 찾아보고 적용해본 프로젝트",
    main: "javaScript",
    sub: "none",
    people: "Personal",
  },
  {
    id: 3,
    title: "마켓컬리 디벨롭",
    desc: "마켓컬리를 따라 만들고 유저 서치 후 UI 변경도 해본 디벨롭 페이지",
    main: "javaScript",
    sub: "slickSlider",
    people: "Team",
  },
  {
    id: 4,
    title: "마켓컬리 디벨롭",
    desc: "마켓컬리를 따라 만들고 유저 서치 후 UI 변경도 해본 디벨롭 페이지",
    main: "javaScript",
    sub: "slickSlider",
    people: "Team",
  },
  {
    id: 5,
    title: "마켓컬리 디벨롭",
    desc: "마켓컬리를 따라 만들고 유저 서치 후 UI 변경도 해본 디벨롭 페이지",
    main: "javaScript",
    sub: "slickSlider",
    people: "Team",
  },
  {
    id: 6,
    title: "마켓컬리 디벨롭",
    desc: "마켓컬리를 따라 만들고 유저 서치 후 UI 변경도 해본 디벨롭 페이지",
    main: "javaScript",
    sub: "slickSlider",
    people: "Team",
  },
];

const Project = forwardRef(function Project(props, ref) {
  // const [x, setX] = useState(0);
  const speed = 0.1;
  const targetX = useRef(0);
  const { mouseX } = useMouseScroll();
  const mountRef = useRef(null);
  const mountRef2 = useRef(null);
  const cityRef0 = useRef(null);
  const cityRef01 = useRef(null);
  const cityRef11 = useRef(null);
  const cityRef21 = useRef(null);
  const cityRef22 = useRef(null);
  const cityRef31 = useRef(null);

  useEffect(() => {
    const loop = () => {
      targetX.current += (mouseX - targetX.current) * speed;

      if (mountRef.current) {
        mountRef.current.style.transform = `translateX( -${
          targetX.current / 35
        }px)`;
      }
      if (mountRef2.current) {
        mountRef2.current.style.transform = `translateX( -${
          targetX.current / 35
        }px)`;
      }

      requestAnimationFrame(loop);
    };
    loop();
  }, [mouseX]);

  return (
    <Wrapper ref={ref}>
      <Inner>
        <ProjectWrap>
          <ProjectFix>
            {Projects.map((project) => (
              <ProjectItem key={project.id} {...project}>
                {project.title}
              </ProjectItem>
            ))}
          </ProjectFix>
        </ProjectWrap>
        <CityWrap>
          <CityImg>
            <Back ref={mountRef2} />
            <Back2 ref={mountRef} />
            <Img bgimg={"project/night01.png"} ref={cityRef0} />
            <Img bgimg={"project/night02.png"} ref={cityRef01} />
            <Img bgimg={"project/night03.png"} ref={cityRef11} />
            <Img bgimg={"project/night04.png"} ref={cityRef21} />
            <Img bgimg={"project/night05.png"} ref={cityRef22} />
            <Img bgimg={"project/night06.png"} ref={cityRef31} />
          </CityImg>
        </CityWrap>
      </Inner>
    </Wrapper>
  );
});

export default Project;
