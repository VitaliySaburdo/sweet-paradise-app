import { Nav, NavList, StyledLink} from "./NavBar.styled";

interface NavBarProps {
  color?: string;
  display?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ color, display = false }) => {
  
  const handleOnClick = () => {
    window.scrollTo(0, 0);
}

  return (
    <>
      <Nav>
        <NavList display={display.toString()}>
          <li>
             <StyledLink onClick={handleOnClick} to={'/'} color={color} >Home</StyledLink>
          </li>
          <li>
            <StyledLink onClick={handleOnClick} to={'/goods'} color={color} >Catalog</StyledLink>
          </li>
          <li>
            <StyledLink onClick={handleOnClick} to={'/feedback'} color={color} >Feedback</StyledLink>
          </li>
          <li>
            <p color={color}>Contacts</p>
          </li>
        </NavList>
      </Nav>
    </>
  );
};
