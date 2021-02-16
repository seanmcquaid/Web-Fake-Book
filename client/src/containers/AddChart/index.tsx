import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import AddChartProvider from '../../context/AddChartContext';
import ChartInput from './ChartInput';

const AddChart: React.FC = () => (
  <AddChartProvider>
    <PageContainer>
      <Header>
        <H1>Add Chart</H1>
      </Header>
      <Main>
        <ChartInput />
      </Main>
    </PageContainer>
  </AddChartProvider>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default AddChart;
