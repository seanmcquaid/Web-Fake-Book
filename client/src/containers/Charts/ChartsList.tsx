import { memo } from 'react';
import styled from 'styled-components';
import LinkButton from '../../components/LinkButton';
import { ChartInfoTypes } from '../../types/chartTypes';

type ChartsListProps = {
  charts: ChartInfoTypes[];
};

const ChartsList: React.FC<ChartsListProps> = memo(({ charts }) => (
  <Charts>
    {console.log(charts)}
    {charts.map(({ name, id }) => (
      <Chart key={id}>
        {name}
        <LinkButton to={`/chartInfo/${id}`}>Info</LinkButton>
      </Chart>
    ))}
  </Charts>
));

const Charts = styled.ul``;

const Chart = styled.li``;

export default ChartsList;
