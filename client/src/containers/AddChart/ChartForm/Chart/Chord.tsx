import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import Dropdown from '../../../../components/Dropdown';
import { ChartContext } from '../../../../context/AddChartContext';
import { updateChordInBar } from '../../../../context/AddChartContext/actions';

const functionalNumberOptions = ['%', 1, 2, 3, 4, 5, 6, 7];
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
        name === 'isSeventhChord'
          ? event.currentTarget.value === 'on'
            ? true
            : false
          : event.currentTarget.value;
      console.log(event.currentTarget.value);
      dispatch(updateChordInBar(barIndex, beatIndex, name, value));
    },
    [dispatch, barIndex, beatIndex]
  );

  return (
    <StyledChord>
      <Dropdown
        onChange={onChange}
        name="functionalNumber"
        value={functionalNumber}
        options={functionalNumberOptions}
      />
      <Dropdown
        onChange={onChange}
        name="chordQuality"
        value={chordQuality}
        options={chordQualityOptions}
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

const StyledChord = styled.li``;

export default Chord;
