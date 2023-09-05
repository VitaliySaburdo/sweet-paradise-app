import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    @media screen and (${(props) => props.theme.media.md}) {
    width: 345px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 394px;
  }
`;

export const Img = styled.img`
  width: 236px;
  margin-bottom: 13px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 394px;
  }
`;

export const Title = styled.h3`
  color: #9c0746;
  text-align: center;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  width: 220px;
  color: #444251;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 19px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 100%;
  }
`;

export const Params = styled.p`
  color: #9c0746;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 29px;
`;