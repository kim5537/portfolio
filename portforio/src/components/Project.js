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
  bottom: 300px;
  z-index: 2;
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
  bottom: 10px;
`;

const CityImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid #f00; */
  .city {
    z-index: 3;
  }
  .mount {
    z-index: 1;
  }
`;

const Back = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: center left/contain
    url(${process.env.PUBLIC_URL}/project/nightback00.png) no-repeat;
  /* border: 1px solid #0f0; */
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

const SkyWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const SkyImg = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/${(props) => props.img});
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
  const cityRef00 = useRef(null);
  const cityRef01 = useRef(null);
  const cityRef02 = useRef(null);
  const cityRef03 = useRef(null);
  const cityRef04 = useRef(null);
  const cityRef05 = useRef(null);
  const sky00 = useRef(null);
  const sky01 = useRef(null);

  useEffect(() => {
    const loop = () => {
      targetX.current += (mouseX - targetX.current) * speed;
      if (mountRef.current) {
        mountRef.current.style.transform = `translateX( ${
          -targetX.current / 120
        }px)`;
      }
      if (mountRef2.current) {
        mountRef2.current.style.transform = `translateX( ${
          -targetX.current / 120
        }px)`;
      }
      if (cityRef00.current) {
        cityRef00.current.style.transform = `translateX( ${
          targetX.current / 100
        }px)`;
      }
      if (cityRef01.current) {
        cityRef01.current.style.transform = `translateX( ${
          targetX.current / 100
        }px)`;
      }
      if (cityRef02.current) {
        cityRef02.current.style.transform = `translateX( ${
          -targetX.current / 100
        }px)`;
      }
      if (cityRef03.current) {
        cityRef03.current.style.transform = `translateX( ${
          targetX.current / 80
        }px)`;
      }
      if (cityRef04.current) {
        cityRef04.current.style.transform = `translateX( ${
          targetX.current / 80
        }px)`;
      }
      if (cityRef05.current) {
        cityRef05.current.style.transform = `translateX( ${
          -targetX.current / 60
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
            <Back ref={mountRef2} className="mount" />
            <Back2 ref={mountRef} className="mount" />
            <Img
              bgimg={"project/night01.png"}
              ref={cityRef00}
              className="city"
            />
            <Img
              bgimg={"project/night02.png"}
              ref={cityRef01}
              className="city"
            />
            <Img
              bgimg={"project/night03.png"}
              ref={cityRef02}
              className="city"
            />
            <Img
              bgimg={"project/night04.png"}
              ref={cityRef03}
              className="city"
            />
            <Img
              bgimg={"project/night05.png"}
              ref={cityRef04}
              className="city"
            />
            <Img
              bgimg={"project/night06.png"}
              ref={cityRef05}
              className="city"
            />
          </CityImg>
        </CityWrap>
        <SkyWrap>
          <SkyImg img={"project/SKY00.png"} ref={sky00} />
          <SkyImg img={"project/SKY01.png"} ref={sky01} />
        </SkyWrap>
      </Inner>
    </Wrapper>
  );
});

export default Project;
