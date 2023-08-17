import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
display: flex;
align-items: center;
`;
export const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fonts.accent}; 
  font-size: 26px;
  color: ${props=>props.theme.colors.secondaryColor};
`