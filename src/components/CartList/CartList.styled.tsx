import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 45vh;
  overflow-y: auto;
  padding: 10px 15px;

  scrollbar-width: thin;
  scrollbar-color: #333333 #f1f1f1;
  

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9C0746;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const CartListHeader = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #ffd4dd;
  padding: 10px;
`;

export const TotalPrice = styled.p`
    color: #9c0746;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px;
`