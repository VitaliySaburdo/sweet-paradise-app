import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  @media screen and (${(props) => props.theme.media.md}) {
    padding: 10px;
  }
  @media screen and (${(props) => props.theme.media.md}) {
    padding: 20px;
  }
`;
