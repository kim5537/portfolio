import React from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useTransform,
  // useMotionValueEvent,
} from "framer-motion";

const SectionItem = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 120vh;
  z-index: 10;
`;

const Section = () => {
  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", () => {
  //   console.log(scrollY.current);
  // });

  return (
    <>
      <SectionItem
        style={{
          opacity: useTransform(scrollY, [3600, 4010, 4600], [0, 0.8, 0]),
          backgroundColor: useTransform(
            scrollY,
            [3600, 4010, 4600],
            ["#d6cd9d", "#F1ECCC", "#C7BB7C"]
          ),
        }}
      />
    </>
  );
};

export default Section;
