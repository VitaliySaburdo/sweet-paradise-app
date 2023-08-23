import {useEffect, useState} from 'react';
import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { Wrapper, HeaderWrapper, StyledLink, BurgerMenu } from './Header.styled';
import burgerIcon from '../../images/Header/burger-btn.png';


export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrolled={scrolled ? 1 : 0}>
    <Container>
      <HeaderWrapper>
        <BurgerMenu><img src={burgerIcon } alt="menu" /></BurgerMenu>
        <StyledLink to="/">Sweet Paradise</StyledLink>
        <NavBar />
      </HeaderWrapper>
      </Container>
   </Wrapper>
  );
};
