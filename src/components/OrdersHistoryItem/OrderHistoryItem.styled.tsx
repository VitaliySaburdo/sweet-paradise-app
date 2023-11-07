import styled from 'styled-components'

export const IMG = styled.img`
width: 20px;
@media screen and (${(props) => props.theme.media.md}){
 width: 40px;
}


`