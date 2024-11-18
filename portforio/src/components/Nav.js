import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  position: fixed;
  z-index: 999;
`;
const Wrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
  padding: 10px;
  font-family: ${(props) => props.theme.font.title};
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.darkGreen};
  font-size: 1.4rem;
`;
const NavItem = styled.li``;

const Nav = () => {
  return (
    <Wrapper>
      <Wrap>
        <NavItem>Main</NavItem>
        <NavItem>AboutMe</NavItem>
        <NavItem>Skill</NavItem>
        <NavItem>Project</NavItem>
        <NavItem>Art</NavItem>
      </Wrap>
    </Wrapper>
  );
};

export default Nav;
