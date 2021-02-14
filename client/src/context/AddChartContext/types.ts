export type FunctionalNumberTypes =
  | '%'
  | '1'
  | 'b2'
  | '2'
  | 'b3'
  | '3'
  | '4'
  | '#4'
  | '5'
  | 'b6'
  | '6'
  | 'b7'
  | '7';

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
  displayName?: string;
};

export type BarType = {
  chords: ChordTypes[];
};

export type ChartInfoTypes = {
  name: string;
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
  ADD_CHART_SUCCESS = 'ADD_CHART_SUCCESS',
}

export type ActionTypes =
  | { type: Actions.ADD_CHART_SUCCESS }
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
