import { memo, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../../context/AddChartContext';
import Chord from './Chord';
import { nanoid } from 'nanoid';

const Chart: React.FC = memo(() => {
  const { state } = useContext(ChartContext);
  const bars = useMemo(() => state.bars, [state.bars]);
  console.log(state);

  return (
    <StyledChart>
      {bars.map(({ chords }, barIndex) => (
        <Bar key={nanoid()}>
          Bar {barIndex + 1}
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
