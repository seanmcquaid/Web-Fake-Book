import styled from 'styled-components';
import LinkButton from '../../../components/LinkButton';
import constants from '../../../constants';
import { ChartInfoTypes } from '../../../types/chartTypes';

type ChartsListProps = {
  charts: ChartInfoTypes[];
};

const ChartsList: React.FC<ChartsListProps> = ({ charts }) => (
  <Charts>
    {charts.map(({ name, _id }) => (
      <Chart key={_id}>
        <ChartName>{name}</ChartName>
        <LinkButton to={`/chartInfo/${_id}`}>Info</LinkButton>
      </Chart>
    ))}
  </Charts>
);

const Charts = styled.ul`
  list-style: none;
  color: ${constants.foregroundColor};
`;

const Chart = styled.li`
  border: 2px solid ${constants.lightBackgroundColor};
  margin: 1rem;
  height: 60px;
  width: 260px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ChartName = styled.span`
  width: 50%;
`;

export default ChartsList;
