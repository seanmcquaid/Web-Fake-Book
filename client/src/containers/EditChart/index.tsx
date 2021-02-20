import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import EditChartInput from './EditChartInput';

const EditChart: React.FC = () => (
  <PageContainer>
    <Header>
      <H1>Edit Chart</H1>
    </Header>
    <Main>
      <EditChartInput />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default EditChart;
