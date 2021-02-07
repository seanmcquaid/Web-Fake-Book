import { createContext, Dispatch, useReducer } from 'react';
import reducer from './reducer';

export type Chord = {
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

export type Bar = {
  chords: Chord[];
};

export type StateTypes = {
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

export const initialState: StateTypes = {
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

export enum Actions {
  SET_NUMBER_OF_BARS = 'SET_NUMBER_OF_BARS',
  SET_DEFAULT_KEY = 'SET_DEFAULT_KEY',
  SET_BEATS_PER_MEASURE = 'SET_BEATS_PER_MEASURE',
  SET_NOTE_VALUE_PER_BEAT = 'SET_NOTE_VALUE_PER_BEAT',
  SET_GENRE = 'SET_GENRE',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
}

export type ActionTypes =
  | {
      type: Actions.SET_NUMBER_OF_BARS;
      payload: { numberOfBars: number };
    }
  | {
      type: Actions.SET_DEFAULT_KEY;
      payload: { defaultKey: string };
    }
  | {
      type: Actions.SET_BEATS_PER_MEASURE;
      payload: { beatsPerMeasure: number };
    }
  | {
      type: Actions.SET_NOTE_VALUE_PER_BEAT;
      payload: { noteValuePerBeat: number };
    }
  | {
      type: Actions.SET_GENRE;
      payload: { genre: string };
    }
  | {
      type: Actions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        chord: Chord;
      };
    };

const ChartContext = createContext<{
  state: StateTypes;
  dispatch: Dispatch<ActionTypes>;
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
