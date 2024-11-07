import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Sub = styled.div`
  font-family: ${({ theme }) => theme.font.title};
`;

const Main = () => {
  return (
    <div>
      <Container>폰트 </Container>
      <Sub>적용</Sub>
    </div>
  );
};

export default Main;
