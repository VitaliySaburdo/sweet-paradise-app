import styled from "styled-components";

export const BlockWrapper = styled.div`
  min-height: 245px;
`;

export const MainWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Wrapper = styled.li`
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ffd4dd;
  box-shadow: 4px 4px 10px 1px rgba(226, 226, 226, 0.46);
`;
