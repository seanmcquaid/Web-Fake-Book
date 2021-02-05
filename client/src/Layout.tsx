import styled from 'styled-components';

const Layout: React.FC = ({ children }) => (
  <>
    {children}
    <Footer>Footer Here</Footer>
  </>
);

const Footer = styled.footer``;

export default Layout;
