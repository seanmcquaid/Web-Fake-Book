import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import Dropdown from '../../../../components/Dropdown';
import { ChartContext } from '../../../../context/AddChartContext';
import { updateChordInBar } from '../../../../context/AddChartContext/actions';

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
  'Major',
  'Half Diminished',
  'Diminished',
  'Augmented',
  'Minor Major',
];

type ChordProps = {
  barIndex: number;
  beatIndex: number;
};

const Chord: React.FC<ChordProps> = ({ barIndex, beatIndex }) => {
  const { dispatch, state } = useContext(ChartContext);
  const chordInfo = useMemo(() => state.bars[barIndex].chords[beatIndex], [
    state.bars,
    barIndex,
    beatIndex,
  ]);
  const functionalNumber = useMemo(() => chordInfo.functionalNumber, [
    chordInfo.functionalNumber,
  ]);
  const chordQuality = useMemo(() => chordInfo.chordQuality, [
    chordInfo.chordQuality,
  ]);
  const isSeventhChord = useMemo(() => chordInfo.isSeventhChord, [
    chordInfo.isSeventhChord,
  ]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const name: string = event.currentTarget.name;
      const value: string | boolean =
        name === 'isSeventhChord' ? !isSeventhChord : event.currentTarget.value;
      dispatch(updateChordInBar(barIndex, beatIndex, name, value));
    },
    [dispatch, barIndex, beatIndex, isSeventhChord]
  );

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
`;

export default Chord;
