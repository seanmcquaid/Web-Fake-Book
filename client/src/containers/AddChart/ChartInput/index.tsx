import styled from 'styled-components';
import Inputs from './Inputs';
import Chart from './Chart';
import Button from '../../../components/Button';
import { useContext } from 'react';
import { ChartContext } from '../../../context/AddChartContext';
import { postAddChart } from '../../../services';
import { addChartSuccess } from '../../../context/AddChartContext/actions';
import { useHistory } from 'react-router-dom';

const ChartInput: React.FC = () => {
  const { state, dispatch } = useContext(ChartContext);
  const history = useHistory();

  const onClick = () => {
    postAddChart({ ...state }).subscribe(
      (resp) => {
        dispatch(addChartSuccess());
        history.push('/charts');
      },
      (err) => {
        throw err;
      }
    );
  };

  return (
    <ChartInputContainer>
      <Inputs />
      <Button type="button" onClick={onClick}>
        Add Chart
      </Button>
      <Chart />
    </ChartInputContainer>
  );
};

const ChartInputContainer = styled.div``;

export default ChartInput;
