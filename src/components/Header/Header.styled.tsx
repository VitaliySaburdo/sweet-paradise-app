import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ scrolled: number }>`
  background-color: ${(props) => (props.scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent")};
  transition: background-color 0.4s ease, opacity 0.4s ease;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.accent};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-size: 12px;
  margin-top: 7px;
  margin-bottom: 7px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 20px;
    margin-right: 68px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 26px;
    margin-right: 334px;
  }
`;

export const BurgerMenu = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (${(props) => props.theme.media.md}) {
    display: none;
  }
`;

export const UserNav = styled.ul`
  margin-left: auto;
`;
export const Btn = styled.button`
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 17px;
  @media screen and (${(props) => props.theme.media.md}){
    width: 30px;
  }
    @media screen and (${(props) => props.theme.media.lg}){
    width: 40px;
  }
`