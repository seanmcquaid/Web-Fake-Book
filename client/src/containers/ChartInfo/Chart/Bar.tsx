import { nanoid } from 'nanoid';
import styled from 'styled-components';
import constants from '../../../constants';
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
