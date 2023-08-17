import {NavList} from './NavBar.styled';

export const NavBar = () => {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Catalog</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </NavList>
      </nav>
    </>
  );
};

