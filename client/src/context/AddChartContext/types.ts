export type FunctionalNumberTypes = '%' | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ChordQualityTypes =
  | '%'
  | 'Minor'
  | 'Major'
  | 'Half Diminished'
  | 'Diminished'
  | 'Augmented'
  | 'Minor Major';

export type ChordTypes = {
  functionalNumber: FunctionalNumberTypes;
  chordQuality: ChordQualityTypes;
  isSeventhChord: boolean;
};

export type ChordKeyNames =
  | 'functionalNumber'
  | 'chordQuality'
  | 'isSeventhChord';

export type ChordKeyValues =
  | FunctionalNumberTypes
  | ChordQualityTypes
  | boolean;

export type BarType = {
  chords: ChordTypes[];
};

export type DefaultKeyTypes =
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

export type NumberOfBarsTypes = 0 | 12 | 16 | 32;

export type BeatsPerMeasureTypes = 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type NoteValuePerBeatTypes = 4 | 8 | 16 | 32;

export type GenreTypes =
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
  defaultKey: DefaultKeyTypes;
  numberOfBars: NumberOfBarsTypes;
  bars: BarType[];
  beatsPerMeasure: BeatsPerMeasureTypes;
  noteValuePerBeat: NoteValuePerBeatTypes;
  genre: GenreTypes;
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
      payload: { numberOfBars: NumberOfBarsTypes };
    }
  | {
      type: Actions.SET_DEFAULT_KEY;
      payload: { defaultKey: DefaultKeyTypes };
    }
  | {
      type: Actions.SET_BEATS_PER_MEASURE;
      payload: { beatsPerMeasure: BeatsPerMeasureTypes };
    }
  | {
      type: Actions.SET_NOTE_VALUE_PER_BEAT;
      payload: { noteValuePerBeat: NoteValuePerBeatTypes };
    }
  | {
      type: Actions.SET_GENRE;
      payload: { genre: GenreTypes };
    }
  | {
      type: Actions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        name: string;
        value: string | boolean;
      };
    };
