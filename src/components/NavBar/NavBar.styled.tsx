import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul<{ display: boolean }>`
  display: none;

  @media screen and (${(props) => props.theme.media.md}) {
    display: ${(props) => (props.display ? "none" : "flex")};
    gap: 33px;
    margin-top: 26px;
    margin-bottom: 26px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    display: flex;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color || "#444251"};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
