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
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;

  }
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
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
`;
export const Photo = styled.img`
  margin: 0 auto;
  width: 272px;
  height: 272px;
`;
