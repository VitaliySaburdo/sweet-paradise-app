import { Nav, NavList, UserNav, Btn } from "./NavBar.styled";
import basket from "../../images/Header/basket.png";
// import user from "../../images/Header/user.png";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <NavList>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Catalog</p>
          </li>
          <li>
            <p>Feedback</p>
          </li>
          <li>
            <p>Contacts</p>
          </li>
        </NavList>
      </Nav>
      <UserNav>
        <li>
          <Btn>
            <img src={basket} alt="basket" width="40px" />
          </Btn>
        </li>
        {/* <li><button><img src={user} alt="user" width="40px"/></button></li> */}
      </UserNav>
    </>
  );
};
