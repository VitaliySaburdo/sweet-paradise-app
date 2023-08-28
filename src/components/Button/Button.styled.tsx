import styled from "styled-components";

interface StyledButtonProps {
  width?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 145px;
  height: 45px;
  border-radius: 50px;
  background: linear-gradient(43deg, #9c0746 0%, #b44e79 100%);
  box-shadow: 0px 20px 40px 0px rgba(66, 2, 29, 0.31);
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.btnTxtColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 105.2%;
  cursor: pointer;
  @media screen and (${(props) => props.theme.media.md}) {
    width: ${(props) => props.width || '260px'};
    height: 70px;
    font-size: 18px;
  }
`;
