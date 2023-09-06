import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 345px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 394px;
  }
`;

export const Img = styled.img`
  width: 236px;
  margin-bottom: 13px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 394px;
  }
`;

export const Title = styled.h3`
  color: #9c0746;
  text-align: center;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  width: 220px;
  color: #444251;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 19px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 100%;
  }
`;

export const Params = styled.p`
  color: #9c0746;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 29px;
`;

// Add to cart

export const Box = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #ffd4dd; */
`;
export const Picture = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 20px;
`;
export const Input = styled.input`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const Count = styled.p`
  color: #9c0746;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Item = styled.div`
width: 500px;
`