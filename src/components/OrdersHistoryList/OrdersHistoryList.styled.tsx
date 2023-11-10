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
  min-height: 120px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffd4dd;
  box-shadow: 4px 4px 10px 1px rgba(226, 226, 226, 0.46);
  @media screen and (${(props) => props.theme.media.md}) {
    padding: 10px;
  }
  @media screen and (${(props) => props.theme.media.md}) {
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-left: 10px;
`;

export const OrderText = styled.p`
  font-size: 12px;
  color: #9c0746;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 20px;
  }
`;

export const DataText = styled.p`
  font-size: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  @media screen and (${(props) => props.theme.media.md}) {
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
    font-size: 20px;
    margin-right: 50px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-right: 275px;
  }
`;
export const StyledBox = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-left: 450px;
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
`