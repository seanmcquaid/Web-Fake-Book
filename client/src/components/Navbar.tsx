import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <StyledNav>
    <HomeIcon />
    <LinksList>
      <LinkItem>
        <NavLink to="/addChart">Add Chart</NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="/charts">Charts</NavLink>
      </LinkItem>
    </LinksList>
  </StyledNav>
);

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  background-color: red;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HomeIcon = styled(AiFillHome)`
  font-size: 1rem;
  padding: 0.5rem;
`;

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  width: 100%;
`;

const LinkItem = styled.li`
  padding: 0.5rem;
`;

const NavLink = styled(Link)``;

export default Navbar;
