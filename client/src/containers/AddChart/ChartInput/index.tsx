import { useReducer } from 'react';
import styled from 'styled-components';

type Chord = {
  functionalNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  quality:
    | 'Minor'
    | 'Major'
    | 'Half Diminished'
    | 'Diminished'
    | 'Augmented'
    | 'Minor Major';
  isSeventhChord: boolean;
};

type Bar = {
  chords: Chord[];
  isRepeat: boolean;
  isSection: boolean;
  sectionMarker?: 'A' | 'B';
};

type State = {
  defaultKey:
    | 'C'
    | 'F'
    | 'Bb'
    | 'Eb'
    | 'Ab'
    | 'Db'
    | 'Gb'
    | 'B'
    | 'E'
    | 'A'
    | 'D'
    | 'G';
  numberOfBars: 0 | 12 | 16 | 32;
  bars: Bar[];
  beatsPerMeasure: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  noteValuePerBeat: 4 | 8 | 16 | 32;
  genre:
    | 'Bebop'
    | 'Hard Bop'
    | 'Blues'
    | 'Afro Cuban'
    | 'Cool'
    | 'Dixieland'
    | 'Free'
    | 'Funk'
    | 'Fusion'
    | 'Latin'
    | 'Standard'
    | 'Swing';
};

const initialState: State = {
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

type Action = { type: 'SET_NUMBER_OF_BARS'; payload: number };

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_BARS':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

const ChartInput: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Form></Form>;
};

const Form = styled.form``;

export default ChartInput;
