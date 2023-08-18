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