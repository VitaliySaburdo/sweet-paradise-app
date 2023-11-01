import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHook";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";
import { selectOrders } from "../../redux/orders/ordersSelector";
import { Container } from "../../components/Container/Container";
import { NavBar } from "../../components/NavBar/NavBar";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { Modal } from "../../components/Modal/Modal";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { CartList } from "../../components/CartList/CartList";
import { AddForm } from "../../components/AddForm/AddForm";
import {
  Wrapper,
  HeaderWrapper,
  NvBarWrapper,
  StyledLink,
  BurgerBtn,
  BurgerMenu,
  UserNav,
  Btn,
  Img,
  CartWrapper,
  CartTitle,
  CartText,
  CartImg,
  CartIcon,
  BurgerBtnSkin,
} from "./Header.styled";
import basket from "../../images/Header/basket.png";
import cart from "../../images/Header/cart.png";
import user from "../../images/Header/user.png";
import admin from "../../images/Header/admin.png";
import ordersList from "../../images/Header/orders.png";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  addProductByCategory: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ addProductByCategory }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [open, setIsOpen] = useState(false);

  const isLogin = useAppSelector(selectIsLoggedIn);
  const orders = useAppSelector(selectOrders);
  const currentUser = useAppSelector(selectUser);

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

  const toggleMenu = () => {
    setIsOpen(!open);
  };

  return (
    <Wrapper scrolled={scrolled ? 1 : 0}>
      <Container>
        <HeaderWrapper>
          <BurgerBtn onClick={toggleMenu}>
            <BurgerBtnSkin open={open}>
              <span></span>
            </BurgerBtnSkin>
            <BurgerMenu open={open}>
              <NavBar />
            </BurgerMenu>
          </BurgerBtn>
          <StyledLink to="/">Sweet Paradise</StyledLink>
          <NvBarWrapper>
            <NavBar />
          </NvBarWrapper>
          <UserNav>
            {isAdminModalOpen && (
              <Modal onClick={() => setIsAdminModalOpen(false)}>
                <AddForm
                  addProductByCategory={addProductByCategory}
                  closeModal={() => setIsAdminModalOpen(false)}
                />
              </Modal>
            )}
            <li>
              <Tooltip content={"Basket"}>
                <Btn onClick={() => setIsCartModalOpen(true)}>
                  <Img src={basket} alt="basket" width="40px" />
                  {orders.length > 0 && <CartIcon>{orders.length}</CartIcon>}
                </Btn>
              </Tooltip>
            </li>

            {isCartModalOpen && (
              <Modal onClick={() => setIsCartModalOpen(false)}>
                <CartWrapper>
                  <CartTitle>Your basket</CartTitle>
                  {orders.length === 0 ? (
                    <>
                      <CartText>Your basket is empty</CartText>
                      <CartImg src={cart} alt="cart" width="40px" />
                    </>
                  ) : (
                    <CartList
                      orders={orders}
                      closeCartModal={() => setIsCartModalOpen(false)}
                      openLoginModal={() => setIsLoginModalOpen(true)}
                    />
                  )}
                </CartWrapper>
              </Modal>
            )}
            <li>
              {isLogin && currentUser.role === "ADMIN" ? (
                <li>
                  <Tooltip content={`${currentUser.name}`}>
                    <Btn onClick={() => setIsAdminModalOpen(true)}>
                      <Img src={admin} alt="admin" width="40px" />
                    </Btn>
                  </Tooltip>
                </li>
              ) : isLogin && currentUser.role === "USER" ? (
                <Tooltip content={`${currentUser.name}`}>
                  <NavLink to={"/orders"}>
                    <Img src={ordersList} alt="order list" width="40px" />
                  </NavLink>
                </Tooltip>
              ) : (
                <Tooltip content={"User menu"}>
                  <Btn onClick={() => setIsLoginModalOpen(true)}>
                    <Img src={user} alt="user" width="40px" />
                  </Btn>
                </Tooltip>
              )}
            </li>
            {isLoginModalOpen && (
              <Modal onClick={() => setIsLoginModalOpen(false)}>
                <LoginForm closeModal={() => setIsLoginModalOpen(false)} />
              </Modal>
            )}
          </UserNav>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};
