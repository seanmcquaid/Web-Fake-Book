import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { BarType } from '../../../types/chartTypes';
import Bar from './Bar';

type ChartProps = {
  bars: BarType[];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
};

const Chart: React.FC<ChartProps> = ({
  bars,
  beatsPerMeasure,
  noteValuePerBeat,
}) => {
  return (
    <ChartContainer>
      <TimeSignature>
        <BeatsPerMeasure>{beatsPerMeasure}</BeatsPerMeasure>
        <NoteValuePerBeat>{noteValuePerBeat}</NoteValuePerBeat>
      </TimeSignature>
      <Bars>
        {bars.map(({ chords }) => (
          <Bar chords={chords} key={nanoid()} />
        ))}
      </Bars>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TimeSignature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BeatsPerMeasure = styled.span``;

const NoteValuePerBeat = styled.span``;

const Bars = styled.ol`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px;
  list-style: none;
  justify-items: center;
`;

export default Chart;
