import React, { forwardRef } from "react";
import styled from "styled-components";
import { Inner } from "../style/imgobject";

const Wapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 2700px;
  position: relative;
  background-image: url(${process.env.PUBLIC_URL}/skill/back01.png);
  padding-top: 1600px;
  overflow: hidden;
`;

const TopImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 1200px;
  background-image: url(${process.env.PUBLIC_URL}/skill/back00.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Leaf01 = styled.div`
  position: absolute;
  width: 14vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf01.png)
    no-repeat;
  right: 0;
  top: 800px;
`;
const Leaf02 = styled.div`
  position: absolute;
  width: 18vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf02.png)
    no-repeat;
  right: 10px;
  top: 900px;
  transform: rotate(14deg);
`;

const Leaf03 = styled.div`
  position: absolute;
  width: 16vw;
  max-width: 800px;
  height: 1000px;
  background: center top/contain url(${process.env.PUBLIC_URL}/Skill/leaf04.png)
    no-repeat;
  left: 0px;
  top: 1200px;
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
    font-size: 18px;
    position: relative;
  }
`;

const SkillWrap = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 530px;
`;

const TrainWrap = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  gap: 12px;
  margin: 0 auto;
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
  return (
    <Wapper>
      <Inner>
        <TopImgWrap />
        <Leaf01 />
        <Leaf02 />
        <Leaf03 />
        <Wrapper ref={ref}>
          <Title>
            SKILL<p>정적인 화면에 생명을 불어넣는 Code Skill</p>
          </Title>
        </Wrapper>
      </Inner>
      <SkillWrap>
        <Rail />
        <TrainWrap>
          <Train>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_001.png`} />
              </div>
              <div>HTML</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_002.png`} />
              </div>
              <div>CSS</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_003.png`} />
              </div>
              <div>Java Script</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_004.png`} />
              </div>
              <div>SCSS</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_005.png`} />
              </div>
              <div style={{ fontSize: " 18px" }}>styled-Components</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_006.png`} />
              </div>
              <div>TailWindcss</div>
            </Part>
          </Train>
          <Train>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_007.png`} />
              </div>
              <div>Apollo</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_008.png`} />
              </div>
              <div>FireBase</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_009.png`} />
              </div>
              <div>Netlify</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_010.png`} />
              </div>
              <div>GraphQL</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_018.png`} />
              </div>
              <div>Node.js</div>
            </Part>
          </Train>
          <Train>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_015.png`} />
              </div>
              <div>React</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_011.png`} />
              </div>
              <div style={{ fontSize: " 18px" }}>Framer-motion</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_012.png`} />
              </div>
              <div>Recoil</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_013.png`} />
              </div>
              <div style={{ fontSize: " 18px" }}>Redux,Redux-thunk</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_014.png`} />
              </div>
              <div>ReactQL</div>
            </Part>
          </Train>
          <Train>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_016.png`} />
              </div>
              <div>TypeScript</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_018.png`} />
              </div>
              <div>Next,js</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_019.png`} />
              </div>
              <div>Github</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_020.png`} />
              </div>
              <div>Clip Studio</div>
            </Part>
            <Part>
              <div>
                <img src={`${process.env.PUBLIC_URL}/skill/icon_021.png`} />
              </div>
              <div>SkechUP</div>
            </Part>
          </Train>
        </TrainWrap>
      </SkillWrap>
    </Wapper>
  );
});

export default Skill;
