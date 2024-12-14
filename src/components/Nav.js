import React, { useRef } from "react";
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
  padding: 14px;
  font-family: ${(props) => props.theme.font.title};
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.darkGreen};
  font-size: 1.4rem;
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: scale 0.3s;
  &:hover {
    scale: 1.2;
  }
`;

const Nav = ({ navClick }) => {
  const navList = ["Main", "AboutMe", "Skill", "Project", "Art"];
  return (
    <Wrapper>
      <Wrap>
        {navList.map((it, idx) => (
          <NavItem key={idx} onClick={() => navClick(it)}>
            {it}
          </NavItem>
        ))}
      </Wrap>
    </Wrapper>
  );
};

export default Nav;
