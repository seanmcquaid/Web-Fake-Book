import { Link } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import P from '../../components/Typography/P';
import constants from '../../constants';

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

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HomeLink = styled(Link)`
  text-decoration: underline;
  color: ${constants.foregroundColor};
`;

export default Error;
