import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 196px;
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 298px;
    width: 620px;
    margin-left: 0;
    margin-right: auto;
  }
`;