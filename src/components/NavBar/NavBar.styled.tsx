import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: ${(props) => props.color || props.theme.colors.textColor};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &.active {
    color: #b44e79;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
