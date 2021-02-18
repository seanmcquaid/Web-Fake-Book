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
  _id?: string;
  name: string;
  defaultKey: string;
  numberOfBars: number;
  bars: BarType[];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
  genre: string;
};
