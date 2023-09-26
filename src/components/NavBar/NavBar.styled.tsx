import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul<{ display: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 26px;
  margin-bottom: 26px;
  @media screen and (${(props) => props.theme.media.md}) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 26px;
    margin-bottom: 26px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    display: flex;
    gap: 33px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.color || "#444251"};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &.active {
    color: #000000;
    font-weight: 600;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
