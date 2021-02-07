import styled from 'styled-components';
import Dropdowns from './Dropdowns';
import Chart from './Chart';

const ChartForm: React.FC = () => {
  return (
    <Form>
      <Dropdowns />
      <Chart />
    </Form>
  );
};

const Form = styled.form``;

export default ChartForm;
