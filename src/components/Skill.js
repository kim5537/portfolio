import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Inner } from "../style/imgobject";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
gsap.registerPlugin(ScrollTrigger);
//기준점

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  /* height: 5000px; */
  /* position: relative; */
  height: auto;
`;

const TopLeaf = styled.div`
  height: 1100px;
  width: 100vw;
  max-width: 100%;
  background: center top/cover url(${process.env.PUBLIC_URL}/skill/back00.png)
    no-repeat;
`;

const TargetWrap = styled.div`
  height: calc(100% - 1100px);
  width: 100%;
  /* position: relative; */
  background: url(${process.env.PUBLIC_URL}/skill/back01.png);
`;

const MotionWrap = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  /* position: sticky; */
  top: 0;
`;

const WrapInner = styled.div`
  width: 100%;
  height: 100%;
  /* position: relative; */
`;

const ContantWapper = styled.div`
  width: 100%;
  height: 100vh;
  /* position: absolute; */
  position: relative;
  border: 1px solid #f00;
`;

const Leaf01 = styled.div`
  position: absolute;
  width: 18vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf01.png)
    no-repeat;
  right: 0;
  top: 50px;
`;
const Leaf02 = styled.div`
  position: absolute;
  width: 23vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf02.png)
    no-repeat;
  right: 0px;
  top: 200px;
`;

const Leaf03 = styled.div`
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

const Title = styled.div`
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
  /* height: auto; */
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

const TrainMotion = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  bottom: 0;
  left: 60vw;
  will-change: transform;
`;

const Train = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 440px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const PartWrap = styled.div`
  width: 300px;
  height: 440px;
  padding: 30px 13px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.color.white};
  will-change: transform;
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
  // const moveRef = useRef();
  const movesRef = useRef([]);

  // let train = gsap.utils.toArray(".train-part");
  // let oddTrain = gsap.utils.toArray(".train-part:nth-child(odd)");
  // let evenTrain = gsap.utils.toArray(".train-part:nth-child(even)");

  // ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});

  // useGSAP(() => {
  //   gsap.to(train, {
  //     xPercent: -130 * (train.length - 1),
  //     ease: "none",
  //     start: "top 56px",
  //     scrollTrigger: {
  //       trigger: ".scroll-target",
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (train.length - 1),
  //       end: "+=2800",
  //       markers: true,
  //       // nvalidateOnRefresh: true,
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   ScrollTrigger.batch(train, {
  //     onEnter: (batch) => {
  //       batch.forEach((element, index) => {
  //         gsap.to(element, {
  //           xPercent: index % 2 === 0 ? -100 : 100,
  //           yPercent: index % 2 === 0 ? 50 : -50,
  //           ease: "power1.inOut",
  //         });
  //       });
  //     },
  //     start: "top 56px",
  //     end: "+=2800",
  //     pin: true,
  //     scrub: 1,
  //     markers: true,
  //   });
  // }, [train]);
  // useGSAP(() => {
  //   movesRef.current.forEach((move) => {
  //     const moveitem1 = move.querySelectorAll(".train-part1");
  //     const moveitem2 = move.querySelectorAll(".train-part2");
  //     // console.log(movesRef.current.find())
  //   });
  // }, []);

  useEffect(() => {
    // moveRef를 스크롤에 맞춰 x축 이동
    if (targetRef.current) {
      movesRef.current.forEach((move) => {
        gsap.to(move, {
          xPercent: -100, // x축으로 이동
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top top",
            end: "+=2800", // 이동 범위
            scrub: true, // 스크롤에 따라 이동
            pin: true, // 고정
            markers: true, // 마커 표시 (디버깅 용)
          },
        });
      });

      // train-part1의 Y축 애니메이션 설정
      gsap.utils.toArray(".train-part1").forEach((part) => {
        gsap.to(part, {
          y: [0, 10, -10, 0, 10, -10],
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top top",
            end: "+=2800",
            scrub: true,
            markers: false,
            batch: true, // 배치로 묶어서 최적화
          },
        });
      });

      gsap.utils.toArray(".train-part2").forEach((part) => {
        gsap.to(part, {
          y: [0, -10, 10, 0, -10, 10],
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top top",
            end: "+=2800",
            scrub: true,
            markers: false,
            batch: true, // 배치로 묶어서 최적화
          },
        });
      });
    }
  }, [targetRef]);

  return (
    <Container ref={ref}>
      <TopLeaf />
      <TargetWrap className="scroll-target" ref={targetRef}>
        <MotionWrap>
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
                <TrainMotion
                  className="moveRef"
                  ref={(move) => movesRef.current.push(move)}
                >
                  {/* <Train> */}
                  <PartWrap className="train-part1">
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
                      <div style={{ fontSize: " 18px" }}>styled-Components</div>
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
                  {/* </Train> */}
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
