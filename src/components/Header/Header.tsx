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
  CartWrapper,
  CartTitle,
  CartText,
  CartImg,
  CartIcon,
} from "./Header.styled";
import burgerIcon from "../../images/Header/burger-btn.png";
import basket from "../../images/Header/basket.png";
import cart from "../../images/Header/cart.png";
import user from "../../images/Header/user.png";
import { Modal } from "../Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import { ProductProps } from "../App/App.types";
import { CartList } from "../CartList/CartList";

interface OrderProps {
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id:string, value: number) => void;
}

export const Header: React.FC<OrderProps> = ({
  orders,
  deleteOrder,
  increment,
  decrement,
  changeValue,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  const closeCartModal = () => {
    setIsCartModalOpen(false);
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
              <Btn onClick={openCartModal}>
                <Img src={basket} alt="basket" width="40px" />
                {orders.length > 0 && <CartIcon>{orders.length}</CartIcon>}
              </Btn>
            </li>
            {isCartModalOpen && (
              <Modal onClick={closeCartModal}>
                <CartWrapper>
                  <CartTitle>Your cart</CartTitle>
                  {orders.length === 0 ? (
                    <>
                      <CartText>Your cart is empty</CartText>
                      <CartImg src={cart} alt="cart" width="40px" />
                    </>
                  ) : (
                    <CartList
                      orders={orders}
                      deleteOrder={deleteOrder}
                      increment={increment}
                        decrement={decrement}
                        changeValue={changeValue}
                    />
                  )}
                </CartWrapper>
              </Modal>
            )}
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
