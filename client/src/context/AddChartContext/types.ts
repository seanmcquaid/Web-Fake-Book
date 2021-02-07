export type FunctionalNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ChordQuality =
  | 'Minor'
  | 'Major'
  | 'Half Diminished'
  | 'Diminished'
  | 'Augmented'
  | 'Minor Major';

export type Chord = {
  functionalNumber: FunctionalNumber;
  chordQuality: ChordQuality;
  isSeventhChord: boolean;
};

export type Bar = {
  chords: Chord[];
};

export type DefaultKey =
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

export type NumberOfBars = 0 | 12 | 16 | 32;

export type BeatsPerMeasure = 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type NoteValuePerBeat = 4 | 8 | 16 | 32;

export type Genre =
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

export type StateTypes = {
  defaultKey: DefaultKey;
  numberOfBars: NumberOfBars;
  bars: Bar[];
  beatsPerMeasure: BeatsPerMeasure;
  noteValuePerBeat: NoteValuePerBeat;
  genre: Genre;
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
      payload: { numberOfBars: NumberOfBars };
    }
  | {
      type: Actions.SET_DEFAULT_KEY;
      payload: { defaultKey: DefaultKey };
    }
  | {
      type: Actions.SET_BEATS_PER_MEASURE;
      payload: { beatsPerMeasure: BeatsPerMeasure };
    }
  | {
      type: Actions.SET_NOTE_VALUE_PER_BEAT;
      payload: { noteValuePerBeat: NoteValuePerBeat };
    }
  | {
      type: Actions.SET_GENRE;
      payload: { genre: Genre };
    }
  | {
      type: Actions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        chord: Chord;
      };
    };
