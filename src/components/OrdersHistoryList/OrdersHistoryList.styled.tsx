import styled from "styled-components";

export const BlockWrapper = styled.div`
  min-height: 245px;
`;

export const MainWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Wrapper = styled.li`
  position: relative;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffd4dd;
  box-shadow: 4px 4px 10px 1px rgba(226, 226, 226, 0.46);
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
    min-height: 120px;
    padding: 10px;
  }
  @media screen and (${(props) => props.theme.media.md}) {
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;

  align-items: center;
  gap: 15px;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: column;
    margin-left: 10px;
  }
`;

export const OrderText = styled.p`
  font-size: 10px;
  color: #9c0746;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 20px;
  }
`;

export const DataText = styled.p`
  font-size: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 300px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 16px;
    margin-right: 50px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    min-width: 200px;
    font-size: 20px;
    margin-right: 275px;
  }
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
  }
`;
export const Dots = styled.p`
  color: #9c0746;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledContainer = styled.div`
  min-height: 250px;
  padding: 100px;
`;
export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #444251;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const ShowMoreBtn = styled.button`
  position: absolute;
  display: flex;
  right: 10px;
  top: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
  @media screen and (${(props) => props.theme.media.md}) {
    top: 50px;
  }
`;
export const Icon = styled.svg<{ rotate: boolean }>`
  rotate: ${(props) => (props.rotate ? "0deg" : "180deg")};
  transition: rotate 0.5s ease-in-out;
`;

export const OrderWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (${(props) => props.theme.media.md}) {
    gap: 20px;
  }
`;

export const NameTxt = styled.p`
  width: 80px;
  font-size: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 150px;
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 250px;
    font-size: 20px;
  }
`;

export const QuantityTxt = styled.p`
  min-width: 10px;
  font-size: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  @media screen and (${(props) => props.theme.media.md}) {
    min-width: 60px;
    font-size: 20px;
  }
`;

export const TotalTxt = styled.p`
  font-size: 12px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 20px;
  }
`;

export const Txt = styled.p`
  min-width: 20px;
  font-size: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  @media screen and (${(props) => props.theme.media.md}) {
    min-width: 60px;
    font-size: 20px;
  }
`;

export const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-right: 60px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-right: 150px;
  }
`;
