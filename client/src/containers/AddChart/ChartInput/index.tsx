import styled from 'styled-components';
import Dropdowns from './Dropdowns';
import Chart from './Chart';
import Button from '../../../components/Button';
import { useContext } from 'react';
import { ChartContext } from '../../../context/AddChartContext';
import { postAddChart } from '../../../services';
import { catchError, map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

const ChartInput: React.FC = () => {
  const { state } = useContext(ChartContext);

  const onClick = () => {
    postAddChart({ ...state }).pipe(
      map((axiosResponse: AxiosResponse) => {
        // dispatch action to reset state if successful and redirect
      }),
      catchError((error: AxiosError) => {
        throw error;
      })
    );
  };

  return (
    <ChartInputContainer>
      <Dropdowns />
      <Button type="button" onClick={onClick}>
        Add Chart
      </Button>
      <Chart />
    </ChartInputContainer>
  );
};

const ChartInputContainer = styled.div``;

export default ChartInput;
