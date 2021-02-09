import Chart from 'src/models/Chart';

const keys = {
  C: {
    '%': '%',
    1: 'C',
    2: 'D',
    3: 'E',
    4: 'F',
    5: 'G',
    6: 'A',
    7: 'B',
  },
  F: { '%': '%', 1: 'F', 2: 'G', 3: 'A', 4: 'Bb', 5: 'C', 6: 'D', 7: 'E' },
  Bb: { '%': '%', 1: 'Bb', 2: 'C', 3: 'D', 4: 'Eb', 5: 'F', 6: 'G', 7: 'A' },
  Eb: {},
  Ab: {},
  Db: {},
  Gb: {},
  B: {},
  E: {},
  A: {},
  D: {},
  G: {},
};

const transposeChart = (chart: Chart, key: string) => {
  const newChart = { ...chart };
  const transposedBars = newChart.bars.chords.map(({ chord }) => {
    chord.displayName = keys[key][chord.functionalNumber];
  });
};
