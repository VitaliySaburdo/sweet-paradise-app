import styled from "styled-components";

export const SVG = styled.svg`
  display: block;
  position: absolute;
  left: 15px;
  top: 21px;
  fill: #555555;
  stroke: #555555;
  cursor: pointer;
  @media screen and (${(props) => props.theme.media.md}) {
    top: 12px;
  }
`;
