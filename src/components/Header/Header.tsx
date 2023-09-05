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
import { Modal } from "../Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <Btn onClick={openModal}>
                <Img src={user} alt="user" width="40px" />
              </Btn>
            </li>
            {isModalOpen && (
              <Modal onClick={closeModal}>
                <LoginForm />
              </Modal>
            )}
          </UserNav>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};
