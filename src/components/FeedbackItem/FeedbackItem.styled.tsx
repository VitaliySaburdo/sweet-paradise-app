import styled from "styled-components";

export const Wrapper = styled.li`
  min-width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};

  box-shadow: 4px 4px 10px 1px rgba(226, 226, 226, 0.46);
  @media screen and (${(props) => props.theme.media.md}) {
    min-width: 700px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    min-width: 800px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
