import styled from "styled-components";

export const Title = styled.h2`
  color: #444251;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 40px;
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 50px;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (${(props) => props.theme.media.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    align-items: center;
    text-align: center;
    margin-bottom: 91px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    row-gap: 180px;
  }
`;
export const Text = styled.p`
  color: #444251;
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 40px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-bottom: 0;
    max-width: 100px;
    text-align: start;
  }
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
    justify-content: start;
    gap: 20px;
    &:nth-child(2n) {
      justify-content: end;
      flex-direction: row-reverse;
      & ${Text} {
        text-align: end;
      }
    }
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    &:nth-child(1),
    &:nth-child(5) {
      margin-left: 170px;
    }

    &:nth-child(2),
    &:nth-child(6) {
      margin-right: 170px;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  background-color: #fde5ea;
  stroke-width: 1px;
  stroke: #ffd4dd;
  filter: drop-shadow(0px 15px 40px rgba(254, 195, 207, 0.5));
  @media screen and (${(props) => props.theme.media.md}) {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
`;

export const Photo = styled.img`
  margin: 0 auto;
  width: 272px;
  height: 272px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 500px;
    height: 500px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    top: 237%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
