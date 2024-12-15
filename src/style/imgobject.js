import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Img = styled(motion.div)`
  position: absolute;
  background-image: url(${process.env.PUBLIC_URL}/${(props) => props.bgimg});
  top: ${(props) => props.top || "0"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "0"};
  right: ${(props) => props.right || "auto"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || "cover"};
  ${(props) => props.styleplus};
  @media (max-width: 1000px) {
    ${(props) =>
      props.media &&
      css`
        ${props.media}
      `};
  }
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ArrowRight = ({ fill, size }) => {
  return (
    <svg
      fill={fill || "#000000"}
      width={size || "800px"}
      height={size || "800px"}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
    </svg>
  );
};

export const ArrowLeft = ({ fill, size }) => {
  return (
    <svg
      fill={fill || "#000000"}
      width={size || "800px"}
      height={size || "800px"}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>
    </svg>
  );
};
