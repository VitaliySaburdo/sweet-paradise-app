import { Nav, NavList, StyledLink} from "./NavBar.styled";

// import user from "../../images/Header/user.png";

interface NavBarProps {
  color?: string;
  display?: string;
}

export const NavBar: React.FC<NavBarProps> = ({color, display = false}) => {
  return (
    <>
      <Nav>
        <NavList display={display.toString()}>
          <li>
            <p color={color}>About us</p>
          </li>
          <li>
            <StyledLink to={'/catalog'} color={color} >Catalog</StyledLink>
          </li>
          <li>
            <p color={color}>Feedback</p>
          </li>
          <li>
            <p color={color}>Contacts</p>
          </li>
        </NavList>
      </Nav>
    </>
  );
};
