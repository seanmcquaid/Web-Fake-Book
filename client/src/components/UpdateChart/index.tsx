import styled from 'styled-components';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import { BarType } from '../../types/chartTypes';
import constants from '../../constants';

type UpdateChartPropTypes = {
  bars: BarType[];
  updateChordOnChange: (
    barIndex: number,
    beatIndex: number,
    name: string,
    value: string | boolean
  ) => void;
};

const UpdateChart: React.FC<UpdateChartPropTypes> = ({
  bars,
  updateChordOnChange,
}) => (
  <StyledUpdateChart>
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
  </StyledUpdateChart>
);

const StyledUpdateChart = styled.ol``;

const Bar = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${constants.lightBackgroundColor};
  margin: 0.5rem 0;
  padding: 0.25rem;
`;

const Chords = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${constants.desktopSize}) {
    flex-direction: row;
  }
`;

export default UpdateChart;
