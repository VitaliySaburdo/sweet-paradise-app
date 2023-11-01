import styled from "styled-components";
import { Section } from "../../components/Section/Section";
import { Button } from "../../components/Button/Button";

export const StyledSection = styled(Section)`
  margin-top: 53px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 51px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 71px;
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
`;
