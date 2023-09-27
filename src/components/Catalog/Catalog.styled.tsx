import styled from "styled-components";
import { Container } from "../Container/Container";

export const Box = styled.div`
  margin-top: 53px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 51px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 71px;
  }
`;

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

export const CatalogTitle = styled.h2`
  text-align: center;
  margin-bottom: 70px;
`;

export const StyledContainer = styled(Container)`
  overflow: hidden;
`

export const CatalogList = styled.ul`
  width: 929px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 160px;
`;

export const CatalogItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatalogImg = styled.img`
  margin-bottom: 15px;
`;

export const CatalogText = styled.p`
  color: #b44e79;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CatalogBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
