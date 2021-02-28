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
      <Bars data-testid="bars">
        {bars.map(({ chords }, barIndex) => (
          <Bar chords={chords} key={nanoid()} barIndex={barIndex} />
        ))}
      </Bars>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const TimeSignature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-right: 0.5rem;
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
