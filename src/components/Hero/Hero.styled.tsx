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

export const SliderWrapper = styled.div`
  margin: 0 auto;
  margin-top: 57px;
  width: 190px;
  height: 225px;
`;

export const TextWrapper = styled.p`
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 45px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 15px 40px 0px rgba(0, 0, 0, 0.25);
`;
