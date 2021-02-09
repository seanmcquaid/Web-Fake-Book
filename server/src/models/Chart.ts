interface Chart {
  name: string;
  defaultKey: string;
  numberOfBars: number;
  bars: [
    {
      chord: {
        functionalNumber: string | number;
        chordQuality: string;
        isSeventhChord: boolean;
      };
    }
  ];
  beatsPerMeasure: number;
  noteValuePerBeat: number;
  genre: string;
}

export default Chart;
