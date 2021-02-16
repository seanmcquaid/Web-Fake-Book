import { memo, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../context/AddChartContext';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import Button from '../../../components/Button';
import { BarType } from '../../../context/AddChartContext/types';

type ChartProps = {
  bars: BarType[];
};

const Chart: React.FC<ChartProps> = memo(({ bars }) => {
  return (
    <>
      <Button type="button">Edit This Chart</Button>
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
                />
              ))}
            </Chords>
          </Bar>
        ))}
      </StyledChart>
    </>
  );
});

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
