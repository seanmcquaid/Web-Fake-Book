interface Chart {
  name: string;
  defaultKey: string;
  numberOfBars: number;
  bars: {
    chords: [
      {
        chord: {
          functionalNumber: string | number;
          chordQuality: string;
          isSeventhChord: boolean;
          displayName?: string;
        };
      }
    ];
  };
  beatsPerMeasure: number;
  noteValuePerBeat: number;
  genre: string;
}

export default Chart;
