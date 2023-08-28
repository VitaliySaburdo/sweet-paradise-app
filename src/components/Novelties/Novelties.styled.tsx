import styled from "styled-components";

export const Title = styled.h2`
  color: #444251;
  text-align: center;
  font-family: Montserrat;
  font-size: 44px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 79px;
`;

export const Wrapper = styled.ul`
  @media screen and (${(props) => props.theme.media.lg}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 90px;
  }
`;
