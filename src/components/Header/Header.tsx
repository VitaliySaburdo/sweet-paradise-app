import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import { NavBar } from "../NavBar/NavBar";
import {
  Wrapper,
  HeaderWrapper,
  StyledLink,
  BurgerMenu,
  UserNav,
  Btn,
  Img,
} from "./Header.styled";
import burgerIcon from "../../images/Header/burger-btn.png";
import basket from "../../images/Header/basket.png";
import user from "../../images/Header/user.png";

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
          <BurgerMenu>
            <img src={burgerIcon} alt="menu" />
          </BurgerMenu>
          <StyledLink to="/">Sweet Paradise</StyledLink>
          <NavBar />
          <UserNav>
            <li>
              <Btn>
                <Img src={basket} alt="basket" width="40px" />
              </Btn>
            </li>
            <li>
              <Btn>
                <Img src={user} alt="user" width="40px" />
              </Btn>
            </li>
          </UserNav>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};
