import { Nav, NavList, Text} from "./NavBar.styled";

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
            <Text color={color}>About us</Text>
          </li>
          <li>
            <Text color={color}>Catalog</Text>
          </li>
          <li>
            <Text color={color}>Feedback</Text>
          </li>
          <li>
            <Text color={color}>Contacts</Text>
          </li>
        </NavList>
      </Nav>
    </>
  );
};
