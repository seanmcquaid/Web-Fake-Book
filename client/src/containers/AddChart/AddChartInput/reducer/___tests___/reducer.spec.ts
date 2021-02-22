import reducer from '../';
import { ChartInfoTypes } from '../../../../../types/chartTypes';
import { AddChartActions, AddChartActionTypes } from '../types';

describe('Chart Input - Reducer', () => {
  describe('SET_VALUE', () => {
    it('numberOfBars changes and adds the appropriate number of bars with the appropriate amount of chords', () => {
      const state: ChartInfoTypes = {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      };
      const action: AddChartActionTypes = {
        type: AddChartActions.SET_VALUE,
        payload: {
          key: 'numberOfBars',
          value: 12,
        },
      };

      const result = reducer(state, action);

      expect(result.bars.length).toEqual(12);
      expect(result.bars[0].chords.length).toEqual(4);
    });

    it('beatsPerMeasure creates the correct amount of chords per bar', () => {
      const state: ChartInfoTypes = {
        name: '',
        defaultKey: 'C',
        numberOfBars: 12,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      };
      const action: AddChartActionTypes = {
        type: AddChartActions.SET_VALUE,
        payload: {
          key: 'beatsPerMeasure',
          value: 5,
        },
      };
      const result = reducer(state, action);

      expect(result.bars.length).toEqual(12);
      expect(result.bars[0].chords.length).toEqual(5);
    });

    it('Other key value to change', () => {
      const state: ChartInfoTypes = {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      };
      const action: AddChartActionTypes = {
        type: AddChartActions.SET_VALUE,
        payload: {
          key: 'beatsPerMeasure',
          value: 6,
        },
      };

      const result = reducer(state, action);
      expect(result).toEqual({
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [],
        beatsPerMeasure: 6,
        noteValuePerBeat: 4,
        genre: 'Standard',
      });
    });
  });

  it('UPDATE_CHORD_IN_BAR', () => {
    const state: ChartInfoTypes = {
      name: '',
      defaultKey: 'C',
      numberOfBars: 0,
      bars: [
        {
          chords: [
            {
              functionalNumber: '%',
              chordQuality: '%',
              isSeventhChord: false,
            },
          ],
        },
      ],
      beatsPerMeasure: 4,
      noteValuePerBeat: 4,
      genre: 'Standard',
    };
    const action: AddChartActionTypes = {
      type: AddChartActions.UPDATE_CHORD_IN_BAR,
      payload: {
        key: 'functionalNumber',
        value: 'b2',
        barIndex: 0,
        beatIndex: 0,
      },
    };

    const result = reducer(state, action);
    expect(result).toEqual({
      name: '',
      defaultKey: 'C',
      numberOfBars: 0,
      bars: [
        {
          chords: [
            {
              functionalNumber: 'b2',
              chordQuality: '%',
              isSeventhChord: false,
            },
          ],
        },
      ],
      beatsPerMeasure: 4,
      noteValuePerBeat: 4,
      genre: 'Standard',
    });
  });
});
