import styled from "styled-components";
import { Section } from "../../components/Section/Section";

export const StyledSection = styled(Section)`
  margin-top: 53px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 51px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 71px;
  }
`;
