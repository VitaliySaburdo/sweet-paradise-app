import styled from "styled-components";

export const StyledText = styled.h2`
  font-size: 22px;
  margin: 5px 10px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Picture = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-right: 80px;
  }
`;
export const Input = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
export const Count = styled.p`
  margin-left: 20px;
  color: #9c0746;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-left: 60px;
  }
`;

export const Item = styled.li`
  width: 320px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 5px 10px 0px rgba(66, 2, 29, 0.31);
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 500px;
  }
`;

export const Btn = styled.button`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #929292;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
