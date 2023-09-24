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
  top: 5px;
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
    top: 20px;
    right: 150px;
    width: 100px;
    height: 100px;
    font-size: 22px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    top: -400px;
    right: 35px;
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
  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    top: 100px;
    right: 160px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    z-index: 20;
    top: 190px;
    right: 175px;
  }
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
  /* position: relative; */
  width: 100%;
  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    top: -690px;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    margin-left: 1000px;
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
    transition: rotate 0.5s ease-in-out;
  }
`;

export const Slide = styled.img<{ $index: number; rotate: string }>`
  @media screen and (${(props) => props.theme.media.lg}) {
    position: absolute;
    width: 460px;
    height: 540px;
    rotate: ${(props) => props.rotate};
    transition: rotate 0.5s ease-in-out;

    ${(props) => {
      let left;
      let top;

      if (props.$index === 1) {
        left = 432;
        top = -35;
      } else if (props.$index === 2) {
        left = -40;
        top = 260;
      } else if (props.$index === 0) {
        left = 425;
        top = 500;
      }
      return `
      left: ${left}px;
      top: ${top}px;

    `;
    }}
  }
`;
