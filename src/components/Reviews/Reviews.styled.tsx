import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #ffd4dd;
  filter: drop-shadow(0px 4px 30px rgba(67, 6, 32, 0.3));
  padding: 10px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const Block = styled.div`
  margin-top: 53px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 51px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 71px;
  }
`;

//Form

export const Form = styled.form`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
    & input {
    margin: 0;
    height: 40px;
    padding: 12px 42px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    cursor: pointer;
   
  }
`
export const Label = styled.label`
 display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: calc(14 / 12);
  width: 100%;
`