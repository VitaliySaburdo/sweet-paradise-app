import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { HeaderWrapper } from './Header.styled';
// import { NavBar } from '../Navigation/NavBar/NavBar';

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">sweet paradise</Link>
        {/* <NavBar /> */}
      </HeaderWrapper>
    </Container>
  );
};
