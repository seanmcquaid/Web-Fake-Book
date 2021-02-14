import { nanoid } from 'nanoid';
import { memo } from 'react';
import styled from 'styled-components';
import { BarType } from '../../../context/AddChartContext/types';
import Bar from './Bar';

type ChartProps = {
  bars: BarType[];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
};

const Chart: React.FC<ChartProps> = memo(
  ({ bars, beatsPerMeasure, noteValuePerBeat }) => {
    return (
      <ChartContainer key={nanoid()}>
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
  }
);

const ChartContainer = styled.div``;

const TimeSignature = styled.div``;

const BeatsPerMeasure = styled.span``;

const NoteValuePerBeat = styled.span``;

const Bars = styled.ol``;

export default Chart;
