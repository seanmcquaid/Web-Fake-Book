import { memo, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../../context/AddChartContext';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import { updateChordInBar } from '../../../../context/AddChartContext/actions';

const Chart: React.FC = memo(() => {
  const { state, dispatch } = useContext(ChartContext);
  const bars = useMemo(() => state.bars, [state.bars]);

  const chordInfoOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    barIndex: number,
    chordIndex: number
  ) => {
    const name: string = event.target.name;
    const value: string = event.target.value;
    dispatch(updateChordInBar(barIndex, chordIndex, name, value));
  };

  return (
    <StyledChart>
      {bars.map(({ chords }, barIndex) => (
        <Bar key={nanoid()}>
          <Chords>
            {chords.map(
              (
                { functionalNumber, chordQuality, isSeventhChord },
                beatIndex
              ) => (
                <Chord
                  key={nanoid()}
                  functionalNumber={functionalNumber}
                  chordQuality={chordQuality}
                  isSeventhChord={isSeventhChord}
                  barIndex={barIndex}
                  beatIndex={beatIndex}
                  onChange={chordInfoOnChange}
                />
              )
            )}
          </Chords>
        </Bar>
      ))}
    </StyledChart>
  );
});

const StyledChart = styled.ol``;

const Bar = styled.li``;

const Chords = styled.ol``;

export default Chart;
