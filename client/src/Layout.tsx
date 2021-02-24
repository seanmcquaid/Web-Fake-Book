import styled from 'styled-components';
import Navbar from './components/Navbar';
import constants from './constants';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <ContentContainer>{children}</ContentContainer>
    <Footer>Footer Here</Footer>
  </>
);

const ContentContainer = styled.div`
  margin-top: 5rem;
  min-width: 100%;
  min-height: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-family: ${constants.normalFont};
  background-color: ${constants.lightBackgroundColor};
  color: ${constants.foregroundColor};
  padding: 1rem;
  position: absolute;
  bottom: 0;
`;

export default Layout;
