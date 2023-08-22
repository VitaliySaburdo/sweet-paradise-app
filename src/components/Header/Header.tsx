import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { HeaderWrapper, StyledLink, BurgerMenu } from './Header.styled';
import burgerIcon from '../../images/Header/burger-btn.png';


export const Header = () => {
  return (
    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', position: 'fixed', zIndex: '1000'}}>
    <Container>
      <HeaderWrapper>
        <BurgerMenu><img src={burgerIcon } alt="menu" /></BurgerMenu>
        <StyledLink to="/">Sweet Paradise</StyledLink>
        <NavBar />
      </HeaderWrapper>
      </Container>
      </div>
  );
};
