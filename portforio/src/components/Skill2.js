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
  border: 1px solid #f09;
`;

const TopLeaf = styled.div`
  height: 1100px;
  width: 100vw;
  max-width: 100%;
  background: center top/cover url(${process.env.PUBLIC_URL}/skill/back00.png)
    no-repeat;
`;

const TargetWrap = styled.div`
  width: 100%;
  height: calc(100% - 1100px);
  background: url(${process.env.PUBLIC_URL}/skill/back01.png);
  position: relative;
`;

const MotionWrap = styled(motion.div)`
  height: calc(100vh + 300px);
  width: 100vw;
  max-width: 100%;
  top: 0;
  position: absolute;
  border: 1px solid dodgerblue;
  background: center top/cover url(${process.env.PUBLIC_URL}/skill/back01.png);
  /* top: 0; */
  /* top: ; */
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

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 50px;
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.darkGreen};
  position: relative;
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

//임시 트레인 랩
const TrainWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const TrainMotion = styled(motion.div)`
  position: absolute;
  display: flex;
  gap: 12px;
`;

const Train = styled.div`
  position: relative;
  width: 300px;
  height: 440px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 30px 13px;
  justify-content: space-around;
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

const Skill = forwardRef(function Skill(props, ref) {
  const targetRef = useRef();
  const { scrollY } = useScroll();
  const [bottom, setBottom] = useState();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   // setHeight(window.innerHeight);

  //   const bottomMath = () => {
  //     let scrollYNum = window.scrollY;
  //     let documentHeight = document.body.scrollHeight - window.innerHeight;
  //     setBottom(documentHeight - scrollYNum);
  //     console.log("bottom", bottom);
  //   };
  //   bottomMath();
  // }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.current);
    let scrollYNum = window.scrollY;
    let documentHeight = document.body.scrollHeight;
    setBottom(scrollY.current - window.innerHeight);
    console.log("bottom", bottom);
  });

  return (
    <Container ref={ref}>
      <TopLeaf />
      <TargetWrap ref={targetRef}>
        <MotionWrap
        // style={{
        //   y: useTransform(scrollYProgress, [0, 1], ["4357px", "9000px"]),
        // }}
        >
          <WrapInner>
            <ContantWapper>
              <Leaf01 alt="leaf" />
              <Leaf02 alt="leaf" />
              <Leaf03 alt="leaf" />
              <SkillWrap>
                <Inner>
                  <Wrapper>
                    <Title>
                      SKILL<p></p>
                    </Title>
                  </Wrapper>
                </Inner>
                <Rail />
                <TrainWrap>
                  <TrainMotion>
                    <Train>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_001.png`}
                          />
                        </div>
                        <div>HTML</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_002.png`}
                          />
                        </div>
                        <div>CSS</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_003.png`}
                          />
                        </div>
                        <div>Java Script</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_004.png`}
                          />
                        </div>
                        <div>SCSS</div>
                      </Part>
                      <Part>
                        <div>
                          <img
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
                            src={`${process.env.PUBLIC_URL}/skill/icon_006.png`}
                          />
                        </div>
                        <div>TailWindcss</div>
                      </Part>
                    </Train>
                    <Train>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_007.png`}
                          />
                        </div>
                        <div>Apollo</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_008.png`}
                          />
                        </div>
                        <div>FireBase</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_009.png`}
                          />
                        </div>
                        <div>Netlify</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_010.png`}
                          />
                        </div>
                        <div>GraphQL</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_018.png`}
                          />
                        </div>
                        <div>Node.js</div>
                      </Part>
                    </Train>
                    <Train>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_015.png`}
                          />
                        </div>
                        <div>React</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_011.png`}
                          />
                        </div>
                        <div style={{ fontSize: " 18px" }}>Framer-motion</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_012.png`}
                          />
                        </div>
                        <div>Recoil</div>
                      </Part>
                      <Part>
                        <div>
                          <img
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
                            src={`${process.env.PUBLIC_URL}/skill/icon_014.png`}
                          />
                        </div>
                        <div>ReactQL</div>
                      </Part>
                    </Train>
                    <Train>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_016.png`}
                          />
                        </div>
                        <div>TypeScript</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_018.png`}
                          />
                        </div>
                        <div>Next,js</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_019.png`}
                          />
                        </div>
                        <div>Github</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_020.png`}
                          />
                        </div>
                        <div>Clip Studio</div>
                      </Part>
                      <Part>
                        <div>
                          <img
                            src={`${process.env.PUBLIC_URL}/skill/icon_021.png`}
                          />
                        </div>
                        <div>SkechUP</div>
                      </Part>
                    </Train>
                  </TrainMotion>
                </TrainWrap>
              </SkillWrap>
            </ContantWapper>
          </WrapInner>
        </MotionWrap>
      </TargetWrap>
    </Container>
  );
});

export default Skill;

/// 잎 밑에 부분에 위쪽에 스크롤이 걸리면 배경 + 전철이 같이 움직이고 이 크기는 100vh를 가지면 사실 배경+ 전철이 같이 움직이는데 유저입장에선 멈춰있게 보이지 않을까?
