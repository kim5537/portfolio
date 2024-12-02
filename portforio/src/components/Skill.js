import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Inner } from "../style/imgobject";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useSpring,
} from "framer-motion";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 3000px;
  position: relative;
`;

const BackScroll = styled(motion.div)`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: calc(100% + 1200px);
  background-image: url(${process.env.PUBLIC_URL}/skill/back01.png);
  border: 1px solid #000;
`;

const TopImgWrap = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 1200px;
  background-image: url(${process.env.PUBLIC_URL}/skill/back00.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrap = styled(motion.div)`
  height: 100%;
  width: 100%;
  top: 0;
  /* position: ${(props) => (props.isfixed ? "fixed" : "static")};
   */
  /* position: absolute; */
  position: relative;
  /* background-color: aliceblue; */
`;

const ContantWapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  /* padding-top: 200px; */
  border: 1px solid orange;
`;

const Leaf01 = styled(motion.div)`
  position: absolute;
  width: 18vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf01.png)
    no-repeat;
  right: 0;
  top: 0;
`;
const Leaf02 = styled(motion.div)`
  position: absolute;
  width: 23vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf02.png)
    no-repeat;
  right: 0px;
  top: 0;
`;

const Leaf03 = styled(motion.div)`
  position: absolute;
  width: 22vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf04.png)
    no-repeat;
  left: 0px;
  top: 0;
`;

const TopScroll = styled(motion.div)`
  position: absolute;
  height: 100%;
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
  border: 1px solid #f00;
`;

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
  /* border: 1px solid ${({ theme }) => theme.color.mainDark}; */
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

const Rail = styled.div`
  position: absolute;
  width: 100vw;
  height: 130px;
  background: center/cover url(${process.env.PUBLIC_URL}/Skill/train.png)
    no-repeat;
  margin-top: 400px;
  bottom: 0;
`;

const Skill = forwardRef(function Skill(props, ref) {
  const [isfixed, setIsFixed] = useState(false);
  // const { scrollY } = useScroll();
  const fixRef = useRef(null);

  const { scrollY } = useScroll();
  // const { scrollYProgress } = useScroll({
  //   target: fixRef,
  //   offset: ["start start", "end end"], // 컴포넌트 시작~끝에 대응
  // });

  const scrollYProgress = useTransform(scrollY, [7600, 9000], [0, 1]);

  // 스크롤에 따라 움직임 값 정의
  const xTransform = useSpring(
    useTransform(scrollYProgress, [0, 1], ["100vw", "-100vw"]),
    {
      stiffness: 50,
      damping: 20,
    }
  );
  // const leafTransform = useSpring(
  //   useTransform(scrollYProgress, [0, 1], ["-200px", "0px"]),
  //   { stiffness: 50, damping: 20 }
  // );

  // const ScrollLeaf0 = useTransform(scrollY, [6600, 8000], ["-20vh", "4vh"]);
  // const ScrollLeaf1 = useTransform(scrollY, [7000, 8500], ["-14vh", "20vh"]);
  // const ScrollLeaf2 = useTransform(scrollY, [7900, 8900], ["-20vh", "20vh"]);
  // const ScrollTrain = useTransform(scrollY, [6800, 8500], ["100vw", "0vw"]);
  const ScrollTrainX = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);
  const ScrollLeaf0 = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const ScrollLeaf1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-200px", "-10px"]
  );
  const ScrollLeaf2 = useTransform(scrollYProgress, [0, 1], ["10px", "-300px"]);
  // useEffect(() => {
  // const handleScroll = (latest) => {
  //   if (latest >= 0 && latest < 0.9) {
  //     setIsFixed(true); // 화면 고정
  //   } else {
  //     setIsFixed(false); // 화면 고정 해제
  //   }
  // };

  // const unsubscribe = scrollY.onChange(handleScroll);
  // return () => unsubscribe();
  // }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (prev) => {
    console.log(scrollYProgress.current);
    // if (prev > 0 && prev < 1) {
    //   setIsFixed(true); // 화면 고정
    // } else {
    //   setIsFixed(false); // 화면 고정 해제
    // }
  });

  return (
    <Container ref={ref}>
      <BackScroll
        style={{
          top: useTransform(scrollYProgress, [0, 1], ["-10vh", "100vh"]),
        }}
      >
        <TopImgWrap />
      </BackScroll>

      <Wrap
      // isfixed={isfixed}
      >
        <ContantWapper
          style={{
            top: useTransform(
              scrollYProgress,
              [0, 0.2, 1],
              ["-10vh", "-10vh", "100vh"]
            ),
          }}
        >
          <Leaf01 alt="leaf" style={{ y: ScrollLeaf0 }} />
          <Leaf02 alt="leaf" style={{ y: ScrollLeaf1 }} />
          <Leaf03 alt="leaf" style={{ y: ScrollLeaf2 }} />
          <TopScroll>
            <Inner>
              <Wrapper>
                <Title>
                  SKILL<p></p>
                </Title>
              </Wrapper>
            </Inner>
            <SkillWrap>
              <Rail />
              <TrainWrap>
                <TrainMotion alt="train" style={{ x: ScrollTrainX }}>
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
                      <div style={{ fontSize: " 18px" }}>styled-Components</div>
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
                      <div style={{ fontSize: " 18px" }}>Redux,Redux-thunk</div>
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
          </TopScroll>
        </ContantWapper>
      </Wrap>
    </Container>
  );
});

export default Skill;
