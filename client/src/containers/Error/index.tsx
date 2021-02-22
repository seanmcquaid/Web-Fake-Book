import { Link } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import P from '../../components/Typography/P';

const Error: React.FC = () => (
  <PageContainer>
    <Header>
      <H1>Error</H1>
    </Header>
    <Main>
      <P>
        The page you are searching for doesn't exist, please navigate back to
        the <HomeLink to="/">home page</HomeLink>
      </P>
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const HomeLink = styled(Link)``;

export default Error;
