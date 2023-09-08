import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 30vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #333333 #f1f1f1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
