import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: none;

  @media screen and (${(props) => props.theme.media.md}) {
    display: flex;
    gap: 33px;
    margin-top: 26px;
    margin-bottom: 26px;
    margin-right: 68px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-right: 465px;
  }
`;

