import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ scrolled: number }>`
  background-color: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  transition: background-color 0.4s ease, opacity 0.4s ease;
  position: fixed;
  top: 0;
  width: 100%;
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
  font-size: 22px;
  margin-left: 10px;
  margin-top: 14px;
  margin-bottom: 14px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-left: 0;
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
  display: flex;
  gap: 15px;
`;
export const Btn = styled.button`
  position: relative;
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 25px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 30px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 40px;
  }
`;

// Cart content

export const CartWrapper = styled.div`
  min-width: 270px;
  @media screen and (${(props) => props.theme.media.lg}) {
    min-width: 515px;
  }
`;

export const CartTitle = styled.h2`
text-align: center;
  margin-bottom: 20px;
`;
export const CartText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
export const CartImg = styled.img`
  margin: 0 auto;
  width: 40%;
  height: 40%;
`;

export const CartIcon = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: #FFD4DD;
  border-radius: 50%;
  color: #9C0746;
  font-size: 10px;
  font-weight: bold;
`;
