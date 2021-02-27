import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { ChordTypes } from '../../../types/chartTypes';

type BarProps = {
  chords: ChordTypes[];
};

const Bar: React.FC<BarProps> = ({ chords }) => (
  <StyledBar>
    <Chords>
      {chords.map(({ displayName }) => (
        <Chord key={nanoid()}>{displayName}</Chord>
      ))}
    </Chords>
  </StyledBar>
);

const StyledBar = styled.li``;

const Chords = styled.ol`
  display: flex;
`;

const Chord = styled.li`
  display: flex;
`;

export default Bar;
