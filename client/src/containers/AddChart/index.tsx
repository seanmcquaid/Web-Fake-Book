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

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default AddChart;
