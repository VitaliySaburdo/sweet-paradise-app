import { NavList } from './NavBar.styled';
import basketImage from '../../images/Header/basket.png';

export const NavBar = () => {
  return (
    <>
      <nav>
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
        <ul>
          <li><button><img src={basketImage} alt="basket" /></button></li>
        </ul>
      </nav>
    </>
  );
};

