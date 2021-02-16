import { memo, useCallback } from 'react';
import styled from 'styled-components';
import Checkbox from '../../../components/Checkbox';
import Dropdown from '../../../components/Dropdown';
import {
  ChordQualityTypes,
  FunctionalNumberTypes,
} from '../../../types/chartTypes';

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
  updateChord: (
    barIndex: number,
    beatIndex: number,
    key: string,
    value: string | boolean
  ) => void;
};

const Chord: React.FC<ChordProps> = memo(
  ({
    barIndex,
    beatIndex,
    functionalNumber,
    chordQuality,
    isSeventhChord,
    updateChord,
  }) => {
    const onChange = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const key: string = event.currentTarget.name;
        const value: string | boolean =
          key === 'isSeventhChord'
            ? !isSeventhChord
            : event.currentTarget.value;
        updateChord(barIndex, beatIndex, key, value);
      },
      [barIndex, beatIndex, isSeventhChord, updateChord]
    );

    return (
      <StyledChord data-testid={`bar${barIndex + 1}beat${beatIndex + 1}`}>
        {`Beat ${beatIndex + 1}`}
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
  }
);

const StyledChord = styled.li`
  list-style: none;
`;

export default Chord;
