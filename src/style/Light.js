import React from "react";
import { motion } from "framer-motion";

const Light = ({ animatePaths }) => {
  const lineVariants = {
    initial: (index) => ({
      strokeDasharray: index % 2 === 0 ? "100, 20" : "110, 15",
      strokeDashoffset: 100,
    }),
    animate: (index) => ({
      strokeDashoffset: 0,
      transition: {
        delay: index * 0.2 + 3,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };
  const lineVariants2 = {
    initial: (index) => ({
      strokeDasharray: index % 2 === 0 ? "100, 20" : "80, 5",
      strokeDashoffset: 0,
    }),
    animate: (index) => ({
      strokeDashoffset: 100,
      transition: {
        delay: index * 0.2 + 3,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.55 276.13">
      <defs>
        <style>
          {`     .cls-1 {
        fill: none;
        stroke-linejoin: round;
        stroke: #fff;
        stroke-linecap: round;
      }`}
        </style>
      </defs>

      <g id="light">
        <motion.line
          className="cls-1"
          x1="42.62"
          y1="48.93"
          x2="106.27"
          y2="103.99"
          variants={lineVariants2}
          initial="initial"
          custom={2}
          animate={animatePaths ? "animate" : "initial"}
        />
        <motion.line
          className="cls-1"
          x1="95.51"
          y1="35.72"
          x2="124.11"
          y2="85.49"
          variants={lineVariants2}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={3}
        />
        <motion.line
          className="cls-1"
          x1="134.72"
          y1="7.53"
          x2="144.96"
          y2="79.67"
          variants={lineVariants2}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={5}
        />
        <motion.line
          className="cls-1"
          x1="181.81"
          y1="29.77"
          x2="171.32"
          y2="82.4"
          variants={lineVariants2}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={2}
        />
        <motion.line
          className="cls-1"
          x1="222.33"
          y1="18.54"
          x2="194.8"
          y2="83.73"
          variants={lineVariants2}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={5}
        />
        <motion.line
          className="cls-1"
          x1="211.54"
          y1="101.78"
          x2="277.82"
          y2="40.56"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={3}
        />
        <motion.line
          className="cls-1"
          x1="231.14"
          y1="115.66"
          x2="304.25"
          y2="79.98"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={2}
        />
        <motion.line
          className="cls-1"
          x1="235.98"
          y1="135.7"
          x2="286.85"
          y2="127.91"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={4}
        />
        <motion.line
          className="cls-1"
          x1="236.88"
          y1="157.28"
          x2="280.25"
          y2="165.21"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={4}
        />
        <motion.line
          className="cls-1"
          x1="244.68"
          y1="180.23"
          x2="269.23"
          y2="188.55"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={1}
        />
        <motion.line
          className="cls-1"
          x1="235.98"
          y1="195.16"
          x2="261.42"
          y2="211.68"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={2}
        />
        <motion.line
          className="cls-1"
          x1="178.06"
          y1="236.68"
          x2="183.57"
          y2="260.57"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={5}
        />
        <motion.line
          className="cls-1"
          x1="154.72"
          y1="236.68"
          x2="153.41"
          y2="265.19"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={2}
        />
        <motion.line
          className="cls-1"
          x1="132.03"
          y1="222.2"
          x2="118.82"
          y2="263.21"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={4}
        />
        <motion.line
          className="cls-1"
          x1="111.27"
          y1="215.86"
          x2="71.69"
          y2="274.49"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={2}
        />
        <motion.line
          className="cls-1"
          x1="92.39"
          y1="201.55"
          x2="51.65"
          y2="241.66"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={5}
        />
        <motion.line
          className="cls-1"
          x1="82.48"
          y1="188.55"
          x2="2.1"
          y2="230.39"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={1}
        />
        <motion.line
          className="cls-1"
          x1="81.16"
          y1="163.45"
          x2="12.23"
          y2="173.8"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={6}
        />
        <motion.line
          className="cls-1"
          x1="79.62"
          y1="143.24"
          x2="17.52"
          y2="137.46"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={4}
        />
        <motion.line
          className="cls-1"
          x1="81.16"
          y1="117.2"
          x2="30.29"
          y2="95.4"
          variants={lineVariants}
          initial="initial"
          animate={animatePaths ? "animate" : "initial"}
          custom={3}
        />
      </g>
    </svg>
  );
};

export default Light;
