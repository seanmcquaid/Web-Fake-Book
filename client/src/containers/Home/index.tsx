import styled from 'styled-components';
import LinkButton from '../../components/LinkButton';
import H1 from '../../components/Typography/H1';

const Home: React.FC = () => (
  <PageContainer>
    <Header>
      <H1>Web Fake Book</H1>
    </Header>
    <Main>
      <LinkButton to='/charts'>View Charts</LinkButton>
      <LinkButton to='/addChart'>Add Chart</LinkButton>
    </Main>
  </PageContainer>
);

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header``;

const Main = styled.main``;

export default Home;
