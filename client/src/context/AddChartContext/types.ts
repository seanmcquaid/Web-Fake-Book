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
      payload: { numberOfBars: 12 | 16 | 32 };
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
