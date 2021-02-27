import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown';
import TextInput from '../../../components/TextInput';
import constants from '../../../constants';

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

type InputsPropTypes = {
  valueOnChange: (name: string, value: string | number) => void;
  name: string;
  defaultKey: string;
  numberOfBars: number;
  beatsPerMeasure: number;
  noteValuePerBeat: number;
  genre: string;
};

const Inputs: React.FC<InputsPropTypes> = ({
  valueOnChange,
  name,
  defaultKey,
  numberOfBars,
  beatsPerMeasure,
  noteValuePerBeat,
  genre,
}) => {
  const onChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    valueOnChange(name, value);
  };

  return (
    <InputsContainer>
      <TextInput
        value={name}
        onChange={onChange}
        name="name"
        label="Name"
        placeholder="Tune name here"
      />
      <DropdownsContainer>
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
      </DropdownsContainer>
    </InputsContainer>
  );
};

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${constants.desktopSize}) {
    flex-direction: row;
  }
`;

export default Inputs;
