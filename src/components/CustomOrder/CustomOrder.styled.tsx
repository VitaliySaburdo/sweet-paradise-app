import styled from "styled-components";

export const MainWrapper = styled.div`
  border: 1px solid #000;
  background: linear-gradient(
    97deg,
    #fca4c9 -7.93%,
    #fe71ad 55.51%,
    #b44e79 104.2%
  );
`;

export const Box = styled.div`
  margin-top: 180px;
  margin-left: 250px;
  margin-bottom: 190px;
  width: 500px;
`;

export const Title = styled.h2`
  font-family: Montserrat;
  font-size: 50px;
  color: #a0114e;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 40px;
`;

export const AccentText = styled.span`
  color: #ffffff;
`;

export const Text = styled.p`
  color: #fff;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 51px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled.input`
  background-color: transparent;
  width: 255px;
  height: 27px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid 1px #FFFFFF;
  color: #FFFFFF;
  &:first-child {
    margin-bottom: 17px;
  }
  margin-bottom: 40px;
`;
