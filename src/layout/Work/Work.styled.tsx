import styled from "styled-components";

export const MainTitle = styled.h2`
color: #444251;
text-align: center;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-bottom: 60px;
@media screen and (${(props) => props.theme.media.md}){
  font-size: 44px;
  margin-bottom: 80px;
}
@media screen and (${(props) => props.theme.media.md}){
  font-size: 50px;
  margin-bottom: 90px;
}
`;

export const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 90px;
    gap: 0;
  }
`;

export const StyledImg = styled.img`
position: absolute;
  bottom: -50px;
  right: 100px;
  width: 98px;
@media screen and (${(props) => props.theme.media.md}){
  bottom: -30px;
  right: 620px;
  width: 98px;
}
@media screen and (${(props) => props.theme.media.lg}){
  right: 320px;
}

`;

export const Item = styled.li`
  width: 294px;
  height: 339px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 5px;
  border: 1px solid #ffd4dd;
  /* background-color: #ffffff; */
`;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffd4dd;
  filter: drop-shadow(0px 4px 30px rgba(67, 6, 32, 0.3));
  margin-bottom: 32px;
`;
export const StyledNumber = styled.p`
  color: #b44e79;
  text-align: center;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Title = styled.h3`
  color: #b44e79;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  color: #444251;
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
