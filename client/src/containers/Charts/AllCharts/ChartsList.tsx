import styled from 'styled-components';
import LinkButton from '../../../components/LinkButton';
import { ChartInfoTypes } from '../../../types/chartTypes';

type ChartsListProps = {
  charts: ChartInfoTypes[];
};

const ChartsList: React.FC<ChartsListProps> = ({ charts }) => (
  <Charts>
    {charts.map(({ name, _id }) => (
      <Chart key={_id}>
        {name}
        <LinkButton to={`/chartInfo/${_id}`}>Info</LinkButton>
      </Chart>
    ))}
  </Charts>
);

const Charts = styled.ul``;

const Chart = styled.li``;

export default ChartsList;
