import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Inner } from "../style/imgobject";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import data from "../data.json";
import { useMouseScroll } from "../context/usecontext";
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
  ${(props) => props.istop}
  position: ${(props) => props.fixed};
  background: url(${process.env.PUBLIC_URL}/skill/back01.png);
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
  position: relative;
`;

const ModalWrap = styled(motion.div)`
  position: absolute;
  width: 520px;
  height: 118px;
  top: -50px;
  left: 400px;
`;
const ModalContents = styled.div`
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 18px;
`;
const Name = styled.h5``;
const Desc = styled.div`
  word-break: keep-all;
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
  gap: 10px;
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

const Part = styled(motion.div)`
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
  const moveRef = useRef();
  const [targetY, setTargetY] = useState({});
  // const { crrentScrollY } = useScroll();
  const { scrollY } = useMouseScroll();
  const [fixed, setFixed] = useState("absolute");
  const [istop, setIstop] = useState("top : 0 ; bottom : auto ;");
  const [target, setTarget] = useState("");
  const [targetId, setTargetId] = useState();
  const [modalopen, setModalOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const mobileSize = () => {
      setMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", mobileSize);
    return () => {
      window.removeEventListener("resize", mobileSize);
    };
  }, []);

  // useEffect(() => {
  //   if (modalopen) {
  //     setTimeout(() => {
  //       setModalOpen(false);
  //     }, 5000);
  //   }
  // }, [modalopen]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const skills = data.skills;

  const checkY = () => {
    if (!targetRef.current || !moveRef.current) {
      console.error("targetRef or moveRef is not properly initialized.");
      return;
    }
    const rect = targetRef.current.getBoundingClientRect();
    const move = moveRef.current.getBoundingClientRect();
    const yTop = rect.top + window.scrollY;
    const yBottom = rect.bottom + window.scrollY - move.height;
    setTargetY({ top: yTop, bottom: yBottom });
  };

  useLayoutEffect(() => {
    checkY();
    window.addEventListener("scroll", checkY);
    return () => {
      window.removeEventListener("scroll", checkY);
    };
  }, []);

  useEffect(() => {
    checkY();
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (last) => {
    if (last >= targetY.top && last < targetY.bottom) {
      setFixed("fixed"); // 화면 고정
    } else {
      setFixed("absolute"); // 화면 고정 해제
    }

    if (last > targetY.bottom) {
      setIstop("top : auto ; bottom : 0 ;");
    } else {
      setIstop("top : 0 ; bottom : auto ;");
    }
  });

  const selectedSkill =
    target && targetId
      ? skills[target]?.find((skill) => skill.id === targetId)
      : null;

  const handleModal = (text, id) => {
    setTarget(text);
    setTargetId(id);
    if (id !== targetId) {
      setModalOpen(true);
    } else setModalOpen((prev) => !prev);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setModalOpen(false); // 5초 후 Modal 닫기
    }, 5000);
  };

  useEffect(() => {
    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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

  const modalVariants = {
    initial: (custom) => ({ opacity: 0, y: custom ? -100 : 100, scale: 0.8 }),
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    leaving: (custom) => ({
      opacity: 0,
      scale: 0.8,
      y: custom ? 100 : -100,
      transition: { duration: 0.3 },
    }),
  };
  return (
    <Container ref={ref}>
      <TopLeaf />
      <TargetWrap ref={targetRef}>
        <MotionWrap ref={moveRef} fixed={fixed} istop={istop}>
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
                    <Title style={{ y: veriants }}>SKILL</Title>
                    <AnimatePresence initial={false}>
                      {selectedSkill && modalopen && (
                        <ModalWrap
                          key={`modal-${target}-${targetId}`}
                          variants={modalVariants}
                          initial="initial"
                          animate="visible"
                          exit="leaving"
                          custom={mobile}
                        >
                          <ModalContents>
                            <Name>{selectedSkill.name}</Name>
                            <Desc>{selectedSkill.desc}</Desc>
                          </ModalContents>
                        </ModalWrap>
                      )}
                    </AnimatePresence>
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
                      {skills.skill01.map((skill) => (
                        <Part
                          key={skill.id}
                          onClick={() => handleModal("skill01", skill.id)}
                          whileHover={{ y: 4 }}
                        >
                          <div>
                            <motion.img
                              alt={`train01-${skill.name}`}
                              src={`${process.env.PUBLIC_URL}${skill.img}`}
                            />
                          </div>
                          <div>{skill.name}</div>
                        </Part>
                      ))}
                    </PartWrap>
                    <PartWrap style={{ y: veriants2 }}>
                      {skills.skill02.map((skill) => (
                        <Part
                          key={skill.id}
                          onClick={() => handleModal("skill02", skill.id)}
                          whileHover={{ y: 4 }}
                        >
                          <div>
                            <motion.img
                              alt={`train01-${skill.name}`}
                              src={`${process.env.PUBLIC_URL}${skill.img}`}
                              whileHover={{ y: 4 }}
                            />
                          </div>
                          <div>{skill.name}</div>
                        </Part>
                      ))}
                    </PartWrap>
                    <PartWrap style={{ y: veriants }}>
                      {skills.skill03.map((skill) => (
                        <Part
                          key={skill.id}
                          onClick={() => handleModal("skill03", skill.id)}
                          whileHover={{ y: 4 }}
                        >
                          <div>
                            <motion.img
                              alt={`train01-${skill.name}`}
                              src={`${process.env.PUBLIC_URL}${skill.img}`}
                            />
                          </div>
                          <div>{skill.name}</div>
                        </Part>
                      ))}
                    </PartWrap>
                    <PartWrap style={{ y: veriants2 }}>
                      {skills.skill04.map((skill) => (
                        <Part
                          key={skill.id}
                          onClick={() => handleModal("skill04", skill.id)}
                          whileHover={{ y: 4 }}
                        >
                          <div>
                            <motion.img
                              alt={`train01-${skill.name}`}
                              src={`${process.env.PUBLIC_URL}${skill.img}`}
                            />
                          </div>
                          <div>{skill.name}</div>
                        </Part>
                      ))}
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

/// 잎 밑에 부분에 위쪽에 스크롤이 걸리면 배경 + 전철이 같이 움직이고 이 크기는 100vh를 가지면 사실 배경+ 전철이 같이 움직이는데 유저입장에선 멈춰있게 보이지 않을까?
///onMouseOut={() => setModalOpen(false)}
