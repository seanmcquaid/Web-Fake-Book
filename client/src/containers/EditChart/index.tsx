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

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default EditChart;
