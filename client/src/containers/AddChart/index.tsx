import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import AddChartInput from './AddChartInput';

const AddChart: React.FC = () => (
  <PageContainer>
    <Header>
      <H1>Add Chart</H1>
    </Header>
    <Main>
      <AddChartInput />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default AddChart;
