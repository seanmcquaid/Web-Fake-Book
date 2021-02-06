import { useReducer } from 'react';
import styled from 'styled-components';

type Chord = {
  functionalNumber: number;
  quality: string;
  isSeventhChord: boolean;
};

type Bar = {
  chords: Chord[];
  isRepeat: boolean;
  isSection: boolean;
  sectionMarker?: string;
};

type State = {
  defaultKey: string;
  numberOfBars: number;
  bars: Bar[];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
};

const initialState = {
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  form: 'AABA',
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
