import { nanoid } from 'nanoid';
import styled from 'styled-components';
import constants from '../../../constants';
import { ChordTypes } from '../../../types/chartTypes';

type BarProps = {
  chords: ChordTypes[];
  barIndex: number;
};

const Bar: React.FC<BarProps> = ({ chords, barIndex }) => (
  <StyledBar>
    <Chords data-testid={`bar${barIndex + 1}Chords`}>
      {chords.map(({ displayName }, beatIndex) => (
        <Chord
          key={nanoid()}
          data-testid={`bar${barIndex + 1}beat${beatIndex + 1}`}
        >
          {displayName}
        </Chord>
      ))}
    </Chords>
  </StyledBar>
);

const StyledBar = styled.li`
  border-right: 2px solid ${constants.lightBackgroundColor};
  width: 100%;
  margin-top: 0.5rem;
`;

const Chords = styled.ol`
  display: flex;
`;

const Chord = styled.li`
  display: flex;
  padding-left: 0.125rem;
`;

export default Bar;
