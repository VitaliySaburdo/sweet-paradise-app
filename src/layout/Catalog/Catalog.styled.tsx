import styled from "styled-components";
import { Container } from "../../components/Container/Container";

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
  overflow: visible;
  position: relative;
`;

export const CatalogList = styled.ul<{ scrollPosition: number }>`
min-height: 30px;
  transform: ${(props) => `translateX(${props.scrollPosition}px)`};
  width: 929px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
  transition: transform 0.3s ease;
  @media screen and (${(props) => props.theme.media.lg}) {
    transform: translateX(0);
  }
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
  color: ${(props) => props.theme.colors.secondaryTextColor};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CatalogBtn = styled.button<{ selectedCategory: boolean }>`
  position: relative;
  z-index: 10;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.4s ease;
  transform: ${(props) => (props.selectedCategory ? "scale(1.4)" : "scale(1)")};

  &:hover {
    transition: transform 0.4s ease;
    transform: scale(1.4);
  }
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -9px;
    width: 150px;
    height: 150px;
    background-color: #fde5ea;
    filter: drop-shadow(0px 20px 90px rgba(0, 0, 0, 0.3));
    border-radius: 50%;
    z-index: -1;
    transform: ${(props) =>
      props.selectedCategory ? "scale(1)" : "scale(0.4)"};
    transition: transform 0.4s ease;
  }
`;

export const BtnLeft = styled.button`
  background-color: #ffffff;
  border: solid 3px #9c0746;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 200px;
  left: 0;
  padding: 0;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: none;
  }
`;
export const BtnRight = styled.button`
  background-color: #ffffff;
  border: solid 3px #9c0746;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 200px;
  right: 0;
  padding: 0;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: none;
  }
`;
