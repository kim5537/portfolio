import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// const Svg = styled.svg``;

const LightSvg = ({ isInView }) => {
  const svgAni = {
    start: { pathLength: 0 },
    end: {
      pathLength: 1,
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  };

  const reverseSvgAni = {
    // start: { strokeDashoffset: 0, pathLength: 1 },
    start: { pathLength: 1 },
    end: {
      pathLength: 0,
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <svg
      width="448"
      height="448"
      viewBox="0 0 448 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M94.8994 94.7L126.099 123.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M132.5 129.1L162.6 156.6"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M151.8 80.5L158.6 92.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M160.3 96.0999L179.7 130.8"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M80.6992 148.5L88.1992 151.6"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M94.3994 154.5L126.799 167.4"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M130.399 169.2L135.799 171.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M64.8994 200.6L87.1994 201.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M92 201.5L112.8 202.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M116.899 202.5L133.199 202.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={reverseSvgAni}
        initial="start"
        animate="end"
        d="M61.3994 243.2L68.0994 241.6"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M75.3994 240L126.899 228.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M132.699 226.9L136.499 225.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M51.0996 300.5L123.3 262"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M129.6 258.2L136.5 254.2"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M109 307.8L119.8 296.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M102.1 313.7L105.9 310.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M123.399 292.8L148.099 269.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M125.1 352.5L158.7 302.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M163.899 293.7L168.599 286"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M176.1 340.1L181.2 324.8"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M183 319.5L188.4 303"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M189.6 299.6L191.7 293.4"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M214.8 342.2L215.7 321.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M216 317.5L216.4 308.8"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M248.9 337.8L247.6 332.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M246.499 326.5L241.899 307.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M303.899 261.8L313.699 268.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M316.899 270.5L331.499 279.8"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M314.899 245.8L326.499 249.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M332.8 251.8L340.3 254.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M304.3 219.7L317 221.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M321 222.3L352.4 227.2"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M302.899 194.1L345.499 187.6"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M350.1 187L357.4 185.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M298.699 170.9L302.599 168.8"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M307.399 165.6L377.599 129.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M277.199 154.6L288.699 143.9"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M294 138.7L301.6 131.2"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M306.899 126.1L348.999 84.7"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M256.6 130.8L264.9 113.1"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M266.899 108.2L285.199 69"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M286.6 65.4L289.3 59.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M234.1 133.1L238.3 109.3"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M238.8 106L242.7 84.2998"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M242.699 84.1999L243.099 81.8999"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M243.6 78.4L244.9 72"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M212.5 132.4L211.6 123.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M211.1 120.4L208.1 91.5"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        variants={svgAni}
        initial="start"
        animate="end"
        d="M207.2 85.8999L202.1 40.8999"
        stroke="white"
        stroke-width="1.2257"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LightSvg;
