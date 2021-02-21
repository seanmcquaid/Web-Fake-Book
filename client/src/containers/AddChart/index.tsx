import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import ChartInput from './ChartInput';

const AddChart: React.FC = () => (
  <PageContainer>
    <Header>
      <H1>Add Chart</H1>
    </Header>
    <Main>
      <ChartInput />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default AddChart;
