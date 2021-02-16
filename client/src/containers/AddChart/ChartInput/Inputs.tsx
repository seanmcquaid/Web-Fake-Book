import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown';
import TextInput from '../../../components/TextInput';
import { AddChartContext } from '../../../context/AddChartContext';
import { setValue } from '../../../context/AddChartContext/actions';

const defaultKeyOptions = [
  'C',
  'F',
  'Bb',
  'Eb',
  'Ab',
  'Db',
  'Gb',
  'B',
  'E',
  'A',
  'D',
  'G',
];
const numberOfBarsOptions = [0, 12, 16, 32];
const beatsPerMeasureOptions = [2, 3, 4, 5, 6, 7, 8];
const noteValuePerBeatOptions = [4, 8, 16, 32];
const genreOptions = [
  'Bebop',
  'Hard Bop',
  'Blues',
  'Afro Cuban',
  'Cool',
  'Dixieland',
  'Free',
  'Funk',
  'Fusion',
  'Latin',
  'Standard',
  'Swing',
];

const Inputs: React.FC = () => {
  const { state, dispatch } = useContext(AddChartContext);
  const name = useMemo(() => state.name, [state.name]);
  const defaultKey = useMemo(() => state.defaultKey, [state.defaultKey]);
  const numberOfBars = useMemo(() => state.numberOfBars, [state.numberOfBars]);
  const beatsPerMeasure = useMemo(() => state.beatsPerMeasure, [
    state.beatsPerMeasure,
  ]);
  const noteValuePerBeat = useMemo(() => state.noteValuePerBeat, [
    state.noteValuePerBeat,
  ]);
  const genre = useMemo(() => state.genre, [state.genre]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      dispatch(setValue(name, value));
    },
    [dispatch]
  );

  return (
    <InputsContainer>
      <TextInput
        value={name}
        onChange={onChange}
        name="name"
        label="Name"
        placeholder="Tune name here"
      />
      <Dropdown
        options={defaultKeyOptions}
        value={defaultKey}
        onChange={onChange}
        name="defaultKey"
        label="Default Key"
      />
      <Dropdown
        options={numberOfBarsOptions}
        value={numberOfBars}
        onChange={onChange}
        name="numberOfBars"
        label="Number of Bars"
      />
      <Dropdown
        options={beatsPerMeasureOptions}
        value={beatsPerMeasure}
        onChange={onChange}
        name="beatsPerMeasure"
        label="Beats Per Measure"
      />
      <Dropdown
        options={noteValuePerBeatOptions}
        value={noteValuePerBeat}
        onChange={onChange}
        name="noteValuePerBeat"
        label="Note Value Per Beat"
      />
      <Dropdown
        options={genreOptions}
        value={genre}
        onChange={onChange}
        name="genre"
        label="Genre"
      />
    </InputsContainer>
  );
};

const InputsContainer = styled.div``;

export default Inputs;
