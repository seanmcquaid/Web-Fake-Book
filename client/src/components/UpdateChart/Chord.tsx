import styled from 'styled-components';
import Checkbox from '../Checkbox';
import Dropdown from '../Dropdown';
import {
  ChordQualityTypes,
  FunctionalNumberTypes,
} from '../../types/chartTypes';

const functionalNumberOptions = [
  '%',
  '1',
  'b2',
  '2',
  'b3',
  '3',
  '4',
  '#4',
  '5',
  'b6',
  '6',
  'b7',
  '7',
];
const chordQualityOptions = [
  '%',
  'Minor',
  'Dominant',
  'Major',
  'Half Diminished',
  'Diminished',
  'Augmented',
  'Minor Major',
];

type ChordProps = {
  barIndex: number;
  beatIndex: number;
  functionalNumber: FunctionalNumberTypes;
  chordQuality: ChordQualityTypes;
  isSeventhChord: boolean;
  updateChordOnChange: (
    barIndex: number,
    beatIndex: number,
    name: string,
    value: string | boolean
  ) => void;
};

const Chord: React.FC<ChordProps> = ({
  barIndex,
  beatIndex,
  functionalNumber,
  chordQuality,
  isSeventhChord,
  updateChordOnChange,
}) => {
  const onChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name: string = event.currentTarget.name;
    const value: string | boolean =
      name === 'isSeventhChord' ? !isSeventhChord : event.currentTarget.value;
    updateChordOnChange(barIndex, beatIndex, name, value);
  };

  return (
    <StyledChord data-testid={`bar${barIndex + 1}beat${beatIndex + 1}`}>
      <Dropdown
        onChange={onChange}
        name="functionalNumber"
        value={functionalNumber}
        options={functionalNumberOptions}
        label="Func Num"
      />
      <Dropdown
        onChange={onChange}
        name="chordQuality"
        value={chordQuality}
        options={chordQualityOptions}
        label="Quality"
      />
      <Checkbox
        onChange={onChange}
        name="isSeventhChord"
        checked={isSeventhChord}
        label="7th Chord?"
      />
    </StyledChord>
  );
};

const StyledChord = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Chord;
