import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (${(props) => props.theme.media.md}){
    margin-top: 298px;
    width: 620px;
    margin-left: 0;
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-size: 30px;
  margin-bottom: 15px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 60px;
    margin-bottom: 38px;
  } 
  
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 80px;
    margin-bottom: 41px;
  }
`;

export const Slogan = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 46px;
  }
  @media screen and (${(props) => props.theme.media.lg}){
    text-align: start;
    margin-bottom: 60px;
  }
`;

export const VideoContainer = styled.iframe`
@media screen and (${(props) => props.theme.media.lg}){
  margin-top: 206px;
width: 340px;
height: 220px;
margin-bottom: 180px;
}
`


