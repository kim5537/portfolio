import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const OneSection = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 120vh;
`;
const Section = () => {
  const { scrollY } = useScroll();
  return (
    <>
      <OneSection
        style={{
          opacity: useTransform(scrollY, [3600, 4400, 4900], [0, 0.6, 0]),
          backgroundColor: useTransform(
            scrollY,
            [3600, 4400, 4900],
            ["#d6cd9d", "#d6cd9d", "#C7BB7C"]
          ),
        }}
      />
    </>
  );
};

export default Section;
