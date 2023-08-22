import styled from "styled-components";

export const SliderWrapper = styled.div<{ image: number }>`
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
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 100%;
    height: 100%;
    transform: none;
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

export const MainWrapper = styled.div<{ index: number }>`
  margin-top: 57px;
  position: relative;
  width: 100%;
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    margin-left: 700px;
    ${(props) => {
      let rotate;
      if (props.index === 0) {
        rotate = 120;
      } else if (props.index === 1) {
        rotate = 240;
      } else if (props.index === 2) {
        rotate = 360;
      }
      return `
      rotate: ${rotate}deg;
    `;
    }}
  }
`;

export const Slide = styled.img<{ index: number }>`
  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    width: 460px;
    height: 540px;
    ${(props) => {
      let left;
      let top;
      let rotate = 0;

      if (props.index === 1) {
        left = 0;
        top = 150;
        rotate += 120;
      } else if (props.index === 2) {
        left = 600;
        top = 350;
        rotate += 120;
      } else if (props.index === 0) {
        left = 500;
        top = -200;
        rotate += 120;
      }
      return `
      left: ${left}px;
      top: ${top}px;
      rotate: ${rotate}deg;
    `;
    }}
  }
`;
