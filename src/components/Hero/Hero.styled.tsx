import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-size: 30px;
  margin-bottom: 15px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 60px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 80px;
  }
`;

export const Slogan = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;


