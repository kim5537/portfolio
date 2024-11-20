import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Img = styled(motion.div)`
  position: absolute;
  background-image: url(${process.env.PUBLIC_URL}/${(props) => props.bgimg});
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || "cover"};
  ${(props) => props.stylePlus};
  @media (max-width: 900px) {
    ${(props) =>
      props.media &&
      css`
        ${props.media}
      `};
  }
`;
