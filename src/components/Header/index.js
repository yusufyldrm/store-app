import { getsinglePath } from 'utils/router';
import {
  Wrapper,
  Container,
  Logo,
  Navs
} from './style';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo to={'/'}>Store App</Logo>

        <Navs>
          <Logo to={getsinglePath('createProduct').path}>Register</Logo>
        </Navs>
      </Container>
    </Wrapper>
  )
};

export default Header;
