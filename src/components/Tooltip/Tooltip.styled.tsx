import styled from "styled-components";

export const TooltipText = styled.span`
position: absolute;
  z-index: 100;
  top: 45px;
  right: 10px;

  text-align: center;
  white-space: nowrap;
  font-family: Montserrat;
  font-style: normal;
  line-height: normal;
  font-weight: 600;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.btnTxtColor};
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};

  opacity: 0;

  transition: opacity 0.3s;
`;

export const TooltipWrapper = styled.span`
  position: relative;

    &:hover ${TooltipText} {
    opacity: 1;
  }
`;


