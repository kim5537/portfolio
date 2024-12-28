import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Bird,
  Flower01,
  Flower02,
  Img,
  Tree01,
  Tree02,
} from "../style/imgobject";
import { color, motion, useInView, useMotionValueEvent } from "framer-motion";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 1200px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  padding-top: 40px;
  position: relative;
`;

const Svgdiv = styled.div`
  height: auto;
  position: absolute;
  z-index: 10;
  &.tree01 {
    right: 0;
    top: -30px;
    width: 800px;
    rotate: -40deg;
  }
  &.tree02 {
    top: 0;
    left: 0;
    width: 100%;
    svg {
      stroke-width: 2px;
    }
  }
  &.bird {
    top: 28px;
    right: 0;
    width: 20%;
    svg {
      stroke-width: 1px;
    }
  }
`;

const TreeBird = styled.div`
  position: absolute;
  height: 600px;
  width: 900px;
  top: 1000px;
  left: -80px;
`;

const BackImgWrap = styled.div`
  width: 960px;
  height: 570px;
  position: relative;
  margin: 0 auto;
  transform: translate(32%, 0%);
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: calc(100% - 30vw);
    margin: 0 20% 0 24%;
    transform: translate(10%, 0%);
  }
`;

const ContentWarp = styled.div`
  position: relative;
  margin: 0 auto;
  top: 30px;
  width: 1080px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  top: -280px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    top: -500px;
    padding: 0 20px;
  }
`;

const Left = styled.div`
  height: 600px;
  width: 420px;
  display: flex;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 1000px) {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.h2`
  font-family: ${({ theme }) => theme.font.title};
  writing-mode: vertical-lr;
  height: 100%;
  -webkit-text-stroke: 2px ${({ theme }) => theme.color.mainDark};
  p:nth-child(1) {
    color: ${({ theme }) => theme.color.darkGreen};
    position: relative;
    &::before {
      position: absolute;
      content: "샘솟는 창의력을 가진";
      z-index: 1;
      color: ${({ theme }) => theme.color.darkGreen};
      -webkit-text-stroke: 0px;
    }
  }
  p:nth-child(2) {
    position: relative;
    color: ${({ theme }) => theme.color.white};
    text-indent: 1%;
    &::before {
      content: "드로잉 가능한 개발자 김령희 입니다.";
      position: absolute;
      height: 100%;
      top: 0%;
      z-index: 1;
      color: ${({ theme }) => theme.color.white};
      -webkit-text-stroke: 0px;
    }
  }
  @media screen and (max-width: 1000px) {
    height: auto;
    font-size: 16px;
  }
`;

const CharacterWrap = styled.div`
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    &#flower01 {
      width: 100px;
      height: 120px;
      top: -9px;
      left: 154px;
      rotate: -10deg;
      stroke-width: 1px;
      rotate: -14deg;
    }
    &#flower02 {
      width: 80px;
      height: 130px;
      top: -20px;
      left: 220px;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mainDark};
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 400px;
    margin: 0 auto;
    margin: 0px 6px;
  }
`;

const Right = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
  @media screen and (max-width: 1000px) {
    margin-top: 0px;
    /* width: 100%; */
    width: 340px;
    align-items: center;
  }
  & > div {
    width: 100%;
  }
`;

const Wap1 = styled(motion.div)`
  width: 400px;
`;
const Wap2 = styled.div`
  width: 80%;
`;
const Wap3 = styled.div`
  width: 80%;
`;
const Wap4 = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 1000px) {
    width: 340px;
  }
`;

const Box2 = styled.div`
  position: relative;
  width: 580px;
  height: 170px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mainDark};
  border-radius: 30px;
  text-align: center;
  padding: 20px;
  h3 {
    font-family: ${({ theme }) => theme.font.title};
    color: ${({ theme }) => theme.color.mainDark};
    font-size: 26px;
    margin-bottom: 5px;
  }
  p {
    font-size: 24px;
    color: ${({ theme }) => theme.color.darkGreen};
  }
  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: -70px;
    top: 50px;
    border-right: 40px solid ${({ theme }) => theme.color.mainDark};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid transparent;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: -68px;
    top: 50px;
    border-right: 40px solid ${({ theme }) => theme.color.white};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid transparent;
  }

  @media screen and (max-width: 1000px) {
    width: 340px;
    margin: 0 auto;
    height: 130px;
    h3 {
      font-size: 1.3rem;
      margin-bottom: 6px;
    }
    p {
      font-size: 1rem;
    }
    br {
      display: none;
    }
    &::before {
      content: "";
      display: none;
    }
    &::after {
      display: none;
    }
  }
`;

const Box3 = styled.div`
  width: 460px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mainDark};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 14px 14px;
  h3 {
    font-size: 26px;
    font-family: ${({ theme }) => theme.font.title};
    color: ${(props) => props.theme.color.green};
  }
  @media screen and (max-width: 1000px) {
    width: 200px;
    height: 60px;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 18px;
    }
  }
`;

const AboutMe2 = () => {
  const wapRef = useRef(null);
  const wapRef2 = useRef(null);
  const wapRef3 = useRef(null);
  const wapRef4 = useRef(null);
  const flower01 = useRef(null);
  const flower02 = useRef(null);

  const wapView = useInView(wapRef, { once: true });

  return (
    <Container>
      <Svgdiv className="tree01">
        <Tree01 color={`#6f623f`} wapView={wapView} />
      </Svgdiv>
      <TreeBird>
        <Svgdiv className="tree02">
          <Tree02 color={`#6f623f`} wapView={wapView} />
        </Svgdiv>
        <Svgdiv className="bird">
          <Bird color={`#6f623f`} wapView={wapView} />
        </Svgdiv>
      </TreeBird>
      <BackImgWrap>
        <Img
          bgimg={`aboutImg/sky.png`}
          media="top:4px; height: 100%; background-size:contain "
        />
        <Img
          bgimg={`aboutImg/Window.png`}
          media="top: auto; bottom: 0; height: 100%; background-size:contain"
        />
      </BackImgWrap>
      <ContentWarp>
        <Content ref={wapRef}>
          <Left>
            <Text>
              <p>샘솟는 창의력을 가진 </p>
              <p>드로잉 가능한 개발자 김령희 입니다.</p>
            </Text>
            <CharacterWrap>
              <Flower01
                ref={flower01}
                className="flower01"
                color={`#6f623f`}
                wapView={wapView}
              />
              <Flower02
                ref={flower02}
                className="flower02"
                color={`#6f623f`}
                wapView={wapView}
              />
              <Box>
                <Img
                  bgimg={`aboutImg/character.png`}
                  width={`300px`}
                  height={`480px`}
                  left={`8%`}
                  top={`auto`}
                  styleplus={`bottom: 0;`}
                  media="width: 100% ; height: 100%; background-size:contain; bottom: -10% ; left: 50% ; transform:translateX(-50%)"
                />
              </Box>
            </CharacterWrap>
          </Left>
          <Right>
            <Wap1
              style={{
                transform: wapView ? "none" : "translateY(200px)",
                opacity: wapView ? 1 : 0,
                transition: `all 1s 0.5s`,
              }}
            >
              <Box2>
                <h3>만화 컨텐츠과 졸업</h3>
                <p>세종시 홍보 만화 수상</p>
                <p>후원 사이트 텀블벅에서 웹툰 소재 판매 성공</p>
              </Box2>
            </Wap1>
            <Wap2
              ref={wapRef2}
              style={{
                transform: wapView ? "none" : "translateY(200px)",
                opacity: wapView ? 1 : 0,
                transition: `all 1s 1s`,
              }}
            >
              <Box2>
                <h3>웹툰 에이전시 회사 경력</h3>
                <p>3D 프로그램 sketchUP을 활용한 </p>
                <p>웹툰 배경, 소품 제작 및 배경 배치</p>
              </Box2>
            </Wap2>
            <Wap3
              ref={wapRef3}
              style={{
                transform: wapView ? "none" : "translateY(200px)",
                opacity: wapView ? 1 : 0,
                transition: `all 1s 1.5s`,
              }}
            >
              <Box2>
                <h3>K-Digital Traning (KDT)</h3>
                <br />
                <p>기업 연계 프론트엔드 개발 과정 수료</p>
              </Box2>
            </Wap3>
            <Wap4
              ref={wapRef4}
              style={{
                transform: wapView ? "none" : "translateX(-200px)",
                opacity: wapView ? 1 : 0,
                transition: `all 1s 2s`,
              }}
            >
              <Box3>
                <h3>1996.07.04</h3>
                <h3>010-5685-7063</h3>
              </Box3>
            </Wap4>
          </Right>
        </Content>
      </ContentWarp>
    </Container>
  );
};

export default AboutMe2;
