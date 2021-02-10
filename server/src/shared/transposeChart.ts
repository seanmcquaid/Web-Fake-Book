import Chart from 'src/models/Chart';
import keys, { KeyTypes } from './keys';

const transposeChart = (chart: Chart, key: KeyTypes): Chart => {
  const transposedBars = chart.bars.chords.map((chord) => {
    const newChord = { ...chord };
    const functionalNumber = newChord.functionalNumber;
    const chordQuality = newChord.chordQuality;
    const isSeventhChord = newChord.isSeventhChord;
    const keyName: { [key: string]: string } = keys[key];
    const chordName = keyName[functionalNumber];
    newChord.displayName = `${chordName} ${chordQuality}${
      isSeventhChord ? '7' : ''
    }`;
    return newChord;
  });

  return { ...chart, bars: { chords: transposedBars } };
};

export default transposeChart;
