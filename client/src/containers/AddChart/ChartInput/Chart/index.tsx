import { memo, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../../context/AddChartContext';
import Chord from './Chord';
import { nanoid } from 'nanoid';

const Chart: React.FC = memo(() => {
  const { state } = useContext(ChartContext);
  const bars = useMemo(() => state.bars, [state.bars]);

  return (
    <StyledChart>
      {bars.map(({ chords }, barIndex) => (
        <Bar key={nanoid()}>
          <Chords>
            {chords.map((chord, beatIndex) => (
              <Chord key={nanoid()} barIndex={barIndex} beatIndex={beatIndex} />
            ))}
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
