import styled from 'styled-components';
import {
  ChordQualityTypes,
  FunctionalNumberTypes,
} from '../../../../context/AddChartContext/types';

type ChordProps = {
  functionalNumber: FunctionalNumberTypes;
  chordQuality: ChordQualityTypes;
  isSeventhChord: boolean;
  barIndex: number;
  beatIndex: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    barIndex: number,
    chordIndex: number
  ) => void;
  key: string;
};

const Chord: React.FC<ChordProps> = () => {
  return <StyledChord></StyledChord>;
};

const StyledChord = styled.li``;

export default Chord;
