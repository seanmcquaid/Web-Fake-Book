import { nanoid } from 'nanoid';
import { memo } from 'react';
import styled from 'styled-components';
import { ChordTypes } from '../../../context/AddChartContext/types';

type BarProps = {
  chords: ChordTypes[];
};

const Bar: React.FC<BarProps> = memo(({ chords }) => (
  <StyledBar>
    <Chords>
      {chords.map(({ displayName }) => (
        <Chord key={nanoid()}>{displayName}</Chord>
      ))}
    </Chords>
  </StyledBar>
));

const StyledBar = styled.li``;

const Chords = styled.ol``;

const Chord = styled.li``;

export default Bar;
