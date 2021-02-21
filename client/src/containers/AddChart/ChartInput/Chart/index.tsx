import styled from 'styled-components';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import { BarType } from '../../../../types/chartTypes';

type ChartPropTypes = {
  bars: BarType[];
  updateChordOnChange: (
    barIndex: number,
    beatIndex: number,
    name: string,
    value: string | boolean
  ) => void;
};

const Chart: React.FC<ChartPropTypes> = ({ bars, updateChordOnChange }) => (
  <StyledChart>
    {bars.map(({ chords }, barIndex) => (
      <Bar key={nanoid()}>
        Bar {barIndex + 1}
        <Chords>
          {chords.map((chord, beatIndex) => (
            <Chord
              key={nanoid()}
              barIndex={barIndex}
              beatIndex={beatIndex}
              functionalNumber={chord.functionalNumber}
              chordQuality={chord.chordQuality}
              isSeventhChord={chord.isSeventhChord}
              updateChordOnChange={updateChordOnChange}
            />
          ))}
        </Chords>
      </Bar>
    ))}
  </StyledChart>
);

const StyledChart = styled.ol``;

const Bar = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Chords = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Chart;
