import styled from "styled-components";

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


export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: column;
  align-items: center;
  gap: 60px;
  min-height: 500px;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: flex;
    flex-direction: row;
    margin-bottom: 90px;
    row-gap: 41px;
    column-gap: 109px;
    align-items: end;
  }
`;