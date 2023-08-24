import { Nav, NavList} from "./NavBar.styled";

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
    </>
  );
};
