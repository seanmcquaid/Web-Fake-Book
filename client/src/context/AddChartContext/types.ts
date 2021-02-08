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

export type ChartInfoTypes = {
  defaultKey: string;
  numberOfBars: number;
  bars: BarType[];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
  genre: string;
};

export enum Actions {
  SET_VALUE = 'SET_VALUE',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
}

export type ActionTypes =
  | {
      type: Actions.SET_VALUE;
      payload: {
        key: string;
        value: string | number;
      };
    }
  | {
      type: Actions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: string | boolean;
      };
    };
