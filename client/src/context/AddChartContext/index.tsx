import { createContext, Dispatch, useReducer } from 'react';
import reducer from './reducer';

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

export type State = {
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

export const initialState: State = {
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

export type Action = { type: 'SET_NUMBER_OF_BARS'; payload: number };

const ChartContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AddChartContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChartContext.Provider value={{ state, dispatch }}>
      {children}
    </ChartContext.Provider>
  );
};

export default AddChartContext;
