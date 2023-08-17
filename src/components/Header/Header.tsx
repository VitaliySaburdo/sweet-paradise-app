
import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { HeaderWrapper, StyledLink } from './Header.styled';


export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <StyledLink to="/">Sweet Paradise</StyledLink>
        <NavBar />
        {/* <Basket/> */}
      </HeaderWrapper>
    </Container>
  );
};
