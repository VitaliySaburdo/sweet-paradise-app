import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 90px;
     gap: 0;
  }
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 52px 31px 43px 31px;
`
export const Circle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #FFD4DD;
filter: drop-shadow(0px 4px 30px rgba(67, 6, 32, 0.30));
margin-bottom: 38px;
`
export const StyledNumber = styled.p`
 color: #B44E79;
text-align: center;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;   
`

export const Title = styled.h2`
color: #B44E79;
text-align: center;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 900;
line-height: normal; 
margin-bottom: 24px;   
`

export const Text = styled.p`
    color: #444251;
text-align: center;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`