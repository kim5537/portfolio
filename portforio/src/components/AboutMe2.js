import React from "react";
import styled from "styled-components";
import { Img } from "../style/imgobject";
import { thead } from "framer-motion/client";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 1010px;
  background-image: url(${process.env.PUBLIC_URL}/aboutImg/back00.png);
  padding-top: 40px;
`;

const BackImgWrap = styled.div`
  width: 960px;
  height: 570px;
  position: relative;
  margin: 0 auto;
  transform: translate(32%, 0%);
  overflow: hidden;
`;

const ContentWarp = styled.div`
  position: relative;
  top: 30px;
  width: 1000px;
  height: 600px;
  display: flex;
  margin: 0 auto;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  gap: 60px;
  top: -280px;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
`;

const Text = styled.h2`
  font-family: ${({ theme }) => theme.font.title};
  writing-mode: vertical-lr;
  height: 100%;
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.mainDark};
  p:nth-child(1) {
    color: ${({ theme }) => theme.color.darkGreen};
  }
  p:nth-child(2) {
    color: ${({ theme }) => theme.color.white};
    text-indent: 1%;
  }
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mainDark};
  border-radius: 40px;
  overflow: hidden;
  position: relative;
`;

const Right = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`;

const Box2 = styled.div`
  width: 580px;
  height: 170px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mainDark};
  border-radius: 30px;
  text-align: center;
  gap: 10px;
  padding: 20px;
  position: relative;
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
`;

const AboutMe2 = () => {
  return (
    <Container>
      <BackImgWrap>
        <Img bgimg={`aboutImg/sky.png`} />
        <Img bgimg={`aboutImg/Window.png`} />
      </BackImgWrap>
      <ContentWarp>
        <Content>
          <Left>
            <Text>
              <p>샘솟는 창의력을 가진 </p>
              <p>드로잉 가능한 개발자 김령희 입니다.</p>
            </Text>
            <Box>
              <Img
                bgimg={`aboutImg/character.png`}
                width={`300px`}
                height={`480px`}
                left={`12%`}
                top={`auto`}
                styleplus={`bottom: 0;`}
              />
            </Box>
          </Left>
          <Right>
            <Box2>
              <h3>만화 컨텐츠과 졸업</h3>
              <p>세종시 홍보 만화 수상</p>
              <p>후원 사이트 텀블벅에서 웹툰 소재 판매</p>
            </Box2>
            <Box2>
              <h3>웹툰 에이전시 회사 경력</h3>
              <p>3D 프로그램 sketchUP을 활용한 </p>
              <p>웹툰 배경, 소품 제작 및 배경 배치</p>
            </Box2>
            <Box2>
              <h3>K-Digital Traning (KDT)</h3>
              <br />
              <p>기업 연계 프론트엔드 개발 과정 수료</p>
            </Box2>
            <Box3>
              <h3>1996.07.04</h3>
              <h3>010-5685-7063</h3>
            </Box3>
          </Right>
        </Content>
      </ContentWarp>
    </Container>
  );
};

export default AboutMe2;
