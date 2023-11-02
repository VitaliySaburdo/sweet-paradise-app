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

export const MainTitle = styled.h2`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #444251;
  font-size: 46px;
  margin-bottom: 25px;
`;

export const StyledButton = styled(Button)`
  display: block;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledContainer = styled.div`
  min-height: 300px;
  padding: 100px;
`;
export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #444251;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`