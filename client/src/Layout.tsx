import styled from 'styled-components';
import Navbar from './components/Navbar';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <ContentContainer>{children}</ContentContainer>
    <Footer>Footer Here</Footer>
  </>
);

const ContentContainer = styled.div`
  height: 100%;
  margin-top: 5rem;
`;

const Footer = styled.footer``;

export default Layout;
