import styled from 'styled-components';

export const Title = styled.h2`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  color: #444251;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 60px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 100%;
    font-size: 44px;
    margin-bottom: 80px;
  }
`;