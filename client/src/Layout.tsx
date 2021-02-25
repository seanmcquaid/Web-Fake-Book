import styled from 'styled-components';
import Navbar from './components/Navbar';

const Layout: React.FC = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    {children}
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.75rem;
`;

export default Layout;
