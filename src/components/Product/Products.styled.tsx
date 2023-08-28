import styled from "styled-components";

export const Wrapper = styled.li`
  width: 394px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 394px;
    margin-bottom: 13px;
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
  margin-bottom: 12px;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Text = styled.p`
  color: #444251;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 19px;
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
