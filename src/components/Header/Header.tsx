import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { HeaderWrapper, StyledLink, BurgerMenu } from './Header.styled';
import burgerIcon from '../../images/Header/burger-btn.png';


export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <BurgerMenu><img src={burgerIcon } alt="menu" /></BurgerMenu>
        <StyledLink to="/">Sweet Paradise</StyledLink>
        <NavBar />
      </HeaderWrapper>
    </Container>
  );
};
