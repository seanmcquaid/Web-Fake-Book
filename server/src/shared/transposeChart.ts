import Chart from 'src/models/Chart';

type KeyTypes =
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

type FunctionalNumberTypes = '%' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

const keys = {
  C: {
    '%': '%',
    '1': 'C',
    '2': 'D',
    '3': 'E',
    '4': 'F',
    '5': 'G',
    '6': 'A',
    '7': 'B',
  },
  F: {
    '%': '%',
    '1': 'F',
    '2': 'G',
    '3': 'A',
    '4': 'Bb',
    '5': 'C',
    '6': 'D',
    '7': 'E',
  },
  Bb: {
    '%': '%',
    '1': 'Bb',
    '2': 'C',
    '3': 'D',
    '4': 'Eb',
    '5': 'F',
    '6': 'G',
    '7': 'A',
  },
  Eb: {
    '%': '%',
    '1': 'Eb',
    '2': 'F',
    '3': 'G',
    '4': 'Ab',
    '5': 'Bb',
    '6': 'C',
    '7': 'D',
  },
  Ab: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  Db: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  Gb: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  B: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  E: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  A: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  D: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
  G: {
    '%': '%',
    '1': 'Ab',
    '2': 'Bb',
    '3': 'C',
    '4': 'Db',
    '5': 'Eb',
    '6': 'F',
    '7': 'G',
  },
};

const transposeChart = (chart: Chart, key: KeyTypes): Chart => {
  const transposedBars = chart.bars.chords.map((chord) => {
    const newChord = { ...chord };
    const functionalNumber = newChord.functionalNumber as FunctionalNumberTypes;
    const displayName = keys[key][functionalNumber];
    newChord.displayName = displayName;
    return newChord;
  });

  return { ...chart, bars: { chords: transposedBars } };
};

export default transposeChart;
