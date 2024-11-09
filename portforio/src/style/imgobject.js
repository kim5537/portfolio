import styled from "styled-components";

export const Img = styled.div`
  position: absolute;
  background-image: url(${(props) => props.bgImg});
  left: ${(props) => props.left || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.size || "cover"};
  ${(props) => props.stylePlus}/* transform:  rotateX('angle'); */
`;