import styled from 'styled-components';
import Navbar from './components/Navbar';
import constants from './constants';

const Layout: React.FC = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    {children}
    <Footer>Footer Here</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.75rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-family: ${constants.normalFont};
  background-color: ${constants.lightBackgroundColor};
  color: ${constants.foregroundColor};
  padding: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Layout;
