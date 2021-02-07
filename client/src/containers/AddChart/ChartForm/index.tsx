import { useContext } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../context/AddChartContext';
import Dropdowns from '../Dropdowns';
import Chart from './Chart';

const ChartForm: React.FC = () => {
  const { state, dispatch } = useContext(ChartContext);

  return (
    <Form>
      <Dropdowns />
      <Chart />
    </Form>
  );
};

const Form = styled.form``;

export default ChartForm;
