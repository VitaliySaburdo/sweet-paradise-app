import styled from "styled-components";

interface SliderWrapperProps {
  image: number;
  totalImages: number;
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  margin: 0 auto;
  width: 190px;
  height: 225px;
  display: flex;
  transform: ${(props) => `translate3d(-${props.image * 100}%, 0, 0)`};
  transition: transform 0.5s ease-in-out;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 356px;
    height: 420px;
  }

`;

export const PriceWrapper = styled.p`
  position: absolute;
  right: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #444251;
  filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.33));
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 105.2%;
  @media screen and (${(props) => props.theme.media.md}) {
    right: 185px;
    width: 100px;
    height: 100px;
    font-size: 22px;
  }
`;

export const TextWrapper = styled.p`
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 45px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0px 15px 40px 0px rgba(0, 0, 0, 0.25);
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  margin-top: 57px;
  position: relative;
  width: 100%;
    /* @media screen and (${(props) => props.theme.media.lg}) {
      position: absolute;
      width: 500px;
      height: 500px;
  }  */
`;
