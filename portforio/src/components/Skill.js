import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Inner } from "../style/imgobject";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

//기준점

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 5000px;
  position: relative;
`;

const TopLeaf = styled.div`
  height: 1100px;
  width: 100vw;
  max-width: 100%;
  background: center top/cover url(${process.env.PUBLIC_URL}/skill/back00.png)
    no-repeat;
  border: 1px solid #f00;
`;

const TargetWrap = styled.div`
  height: calc(100% - 1100px);
  width: 100%;
  position: relative;
  background: url(${process.env.PUBLIC_URL}/skill/back01.png);
`;

const MotionWrap = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  /* ${(props) => props.istop} */
  position: sticky;
  top: 0;
  border: 1px solid #0ff;
  /* background: center top/cover url(${process.env
    .PUBLIC_URL}/skill/back01.png); */
`;

const WrapInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ContantWapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const Leaf01 = styled(motion.div)`
  position: absolute;
  width: 18vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf01.png)
    no-repeat;
  right: 0;
  top: 50px;
`;
const Leaf02 = styled(motion.div)`
  position: absolute;
  width: 23vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf02.png)
    no-repeat;
  right: 0px;
  top: 200px;
`;

const Leaf03 = styled(motion.div)`
  position: absolute;
  width: 22vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf04.png)
    no-repeat;
  left: 0px;
  top: 300px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 50px;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.darkGreen};
  position: absolute;
  p {
    font-size: 24px;
    position: relative;

    &::before {
      /* content: ""; */
      content: "화면에 생명을 불어넣는 Code Skill";
      font-size: 22px;
      position: absolute;
      top: 0;
      -webkit-text-stroke: 4px ${({ theme }) => theme.color.darkGreen};
    }
    &::after {
      /* content: ""; */
      content: "화면에 생명을 불어넣는 Code Skill";
      font-size: 22px;
      position: absolute;
      top: 0;
      -webkit-text-stroke: 0px;
    }
  }
`;

const SkillWrap = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 530px;
  margin-top: 30vh;
`;

const Rail = styled.div`
  position: absolute;
  width: 100vw;
  height: 130px;
  background: center/cover url(${process.env.PUBLIC_URL}/Skill/train.png)
    no-repeat;
  margin-top: 400px;
  bottom: -80px;
`;

// //임시 트레인 랩
// const TrainWrap = styled.div`
//   width: 1200px;
//   height: 100%;
//   margin: 0 auto;
// `;

const TrainMotion = styled(motion.div)`
  position: absolute;
  display: flex;
  gap: 12px;
`;

const Train = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 440px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PartWrap = styled(motion.div)`
  width: 300px;
  height: 440px;
  padding: 30px 13px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Part = styled.div`
  width: 264px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 12px;
  padding: 6px 14px;
  display: flex;
  & > div:nth-child(1) {
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50px;
    padding: 3px;
    width: 46px;
    height: 46px;
    & > img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  & > div:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
    margin: auto;
  }
`;
// useEffect(() => {
//   scrollY.on("change", () => {
//     if (scrollY.get() >= targetY.top && scrollY.get() < targetY.bottom) {
//       setFixed(true); // 화면 고정
//     } else {
//       setFixed(false); // 화면 고정 해제
//     }
//     console.log(fixed);
//     console.log(scrollY.get(), targetY);
//   });
// }, [scrollYProgress]);

const Skill = forwardRef(function Skill(props, ref) {
  const targetRef = useRef();
  const moveRef = useRef();
  const [targetY, setTargetY] = useState({});
  const { scrollY } = useScroll();
  const [fixed, setFixed] = useState("absolute");
  const [istop, setIstop] = useState("top : 0 ; bottom : auto ;");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const checkY = () => {
    const rect = targetRef.current.getBoundingClientRect();
    const move = moveRef.current.getBoundingClientRect();
    const yTop = rect.top + window.scrollY;
    const yBottom = rect.bottom + window.scrollY - move.height;
    setTargetY({ top: yTop, bottom: yBottom });
  };

  useEffect(() => {
    checkY();
    window.addEventListener("scroll", checkY);
    console.log("킴");
    return () => {
      window.removeEventListener("scroll", checkY);
      console.log("끔");
    };
  }, []);

  // useEffect(() => {
  //   checkY();
  // }, [scrollY.current]);

  const veriants = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [6, -6, 6, -6, 6, -6]
  );
  const veriants2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [-6, 6, -6, 6, -6, 6]
  );

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() >= targetY.top && scrollY.get() < targetY.bottom) {
      setFixed("fixed"); // 화면 고정
    } else {
      setFixed("absolute"); // 화면 고정 해제
    }

    if (scrollY.get() > targetY.bottom) {
      setIstop("top : auto ; bottom : 0 ;");
    } else {
      setIstop("top : 0 ; bottom : auto ;");
    }
  });

  return (
    <Container ref={ref}>
      <TopLeaf />
      <TargetWrap ref={targetRef}>
        <MotionWrap ref={moveRef} istop={istop}>
          <WrapInner>
            <ContantWapper>
              <Leaf01
                alt="leaf"
                style={{
                  bottom: 0,
                  top: "auto",
                  y: useTransform(scrollYProgress, [0, 1], ["100px", "200px"]),
                }}
              />
              <Leaf02
                alt="leaf"
                style={{
                  bottom: 0,
                  top: "auto",
                  y: useTransform(scrollYProgress, [0.3, 1], ["20px", "180px"]),
                }}
              />
              <Leaf03
                alt="leaf"
                style={{
                  bottom: 0,
                  top: "auto",
                  y: useTransform(
                    scrollYProgress,
                    [0.2, 0.8],
                    ["100px", "230px"]
                  ),
                }}
              />
              <SkillWrap>
                <Inner>
                  <Wrapper>
                    <Title style={{ y: veriants }}>
                      SKILL<p></p>
                    </Title>
                  </Wrapper>
                </Inner>
                <Rail />
                <TrainMotion
                  style={{
                    bottom: 0,
                    top: "auto",
                    x: useTransform(scrollYProgress, [0, 1], ["60vw", "0vw"]),
                  }}
                >
                  <Train>
                    <PartWrap style={{ y: veriants }}>
                      <Part>
                        <div>
                          <img
                            alt="train01-HTML"
                            src={`${process.env.PUBLIC_URL}/skill/icon_001.png`}
                          />
                        </div>
                        <div>HTML</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train01-css"
                            src={`${process.env.PUBLIC_URL}/skill/icon_002.png`}
                          />
                        </div>
                        <div>CSS</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train01-js"
                            src={`${process.env.PUBLIC_URL}/skill/icon_003.png`}
                          />
                        </div>
                        <div>Java Script</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train01-scss"
                            src={`${process.env.PUBLIC_URL}/skill/icon_004.png`}
                          />
                        </div>
                        <div>SCSS</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train01-styledcomponent"
                            src={`${process.env.PUBLIC_URL}/skill/icon_005.png`}
                          />
                        </div>
                        <div style={{ fontSize: " 18px" }}>
                          styled-Components
                        </div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train01-TailWindcss"
                            src={`${process.env.PUBLIC_URL}/skill/icon_006.png`}
                          />
                        </div>
                        <div>TailWindcss</div>
                      </Part>
                    </PartWrap>
                    <PartWrap style={{ y: veriants2 }}>
                      <Part>
                        <div>
                          <img
                            alt="train02-Apollo"
                            src={`${process.env.PUBLIC_URL}/skill/icon_007.png`}
                          />
                        </div>
                        <div>Apollo</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train02-FireBase"
                            src={`${process.env.PUBLIC_URL}/skill/icon_008.png`}
                          />
                        </div>
                        <div>FireBase</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train02-Netlify"
                            src={`${process.env.PUBLIC_URL}/skill/icon_009.png`}
                          />
                        </div>
                        <div>Netlify</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train02-GraphQL"
                            src={`${process.env.PUBLIC_URL}/skill/icon_010.png`}
                          />
                        </div>
                        <div>GraphQL</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train02-Node.js"
                            src={`${process.env.PUBLIC_URL}/skill/icon_018.png`}
                          />
                        </div>
                        <div>Node.js</div>
                      </Part>
                    </PartWrap>
                    <PartWrap style={{ y: veriants }}>
                      <Part>
                        <div>
                          <img
                            alt="train03-React"
                            src={`${process.env.PUBLIC_URL}/skill/icon_015.png`}
                          />
                        </div>
                        <div>React</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train03-Framer-motion"
                            src={`${process.env.PUBLIC_URL}/skill/icon_011.png`}
                          />
                        </div>
                        <div style={{ fontSize: " 18px" }}>Framer-motion</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train03-Recoil"
                            src={`${process.env.PUBLIC_URL}/skill/icon_012.png`}
                          />
                        </div>
                        <div>Recoil</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train03-Redux"
                            src={`${process.env.PUBLIC_URL}/skill/icon_013.png`}
                          />
                        </div>
                        <div style={{ fontSize: " 18px" }}>
                          Redux,Redux-thunk
                        </div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train03-ReactQL"
                            src={`${process.env.PUBLIC_URL}/skill/icon_014.png`}
                          />
                        </div>
                        <div>ReactQL</div>
                      </Part>
                    </PartWrap>
                    <PartWrap style={{ y: veriants2 }}>
                      <Part>
                        <div>
                          <img
                            alt="train04-TypeScript"
                            src={`${process.env.PUBLIC_URL}/skill/icon_016.png`}
                          />
                        </div>
                        <div>TypeScript</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train04-Nextjs"
                            src={`${process.env.PUBLIC_URL}/skill/icon_018.png`}
                          />
                        </div>
                        <div>Next,js</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train04-Github"
                            src={`${process.env.PUBLIC_URL}/skill/icon_019.png`}
                          />
                        </div>
                        <div>Github</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train04-ClipStudio"
                            src={`${process.env.PUBLIC_URL}/skill/icon_020.png`}
                          />
                        </div>
                        <div>Clip Studio</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            alt="train04-SkechUP"
                            src={`${process.env.PUBLIC_URL}/skill/icon_021.png`}
                          />
                        </div>
                        <div>SkechUP</div>
                      </Part>
                    </PartWrap>
                  </Train>
                </TrainMotion>
              </SkillWrap>
            </ContantWapper>
          </WrapInner>
        </MotionWrap>
      </TargetWrap>
    </Container>
  );
});

export default Skill;
