import styled from 'styled-components';
import H1 from '../../components/Typography/H1';
import AddChartContext from '../../context/AddChartContext';

const AddChart: React.FC = () => {
  return (
    <AddChartContext>
      <PageContainer>
        <Header>
          <H1>Add Chart</H1>
        </Header>
        <Main></Main>
      </PageContainer>
    </AddChartContext>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default AddChart;
