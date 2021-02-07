import styled from 'styled-components';
import Dropdowns from './Dropdowns';
import Chart from './Chart';
import Button from '../../../components/Button';

const ChartForm: React.FC = () => {
  const onSubmit = () => {};
  return (
    <Form onSubmit={onSubmit}>
      <Dropdowns />
      <Button type="submit">Submit</Button>
      <Chart />
    </Form>
  );
};

const Form = styled.form``;

export default ChartForm;
