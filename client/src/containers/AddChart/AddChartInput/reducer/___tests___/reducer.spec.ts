import reducer from '../';
import {
  AddChartInputActions,
  AddChartInputActionTypes,
  AddChartInputStateTypes,
} from '../types';

describe('Chart Input - Reducer', () => {
  describe('SET_VALUE', () => {
    it('numberOfBars changes and adds the appropriate number of bars with the appropriate amount of chords', () => {
      const state: AddChartInputStateTypes = {
        chartInfo: {
          name: '',
          defaultKey: 'C',
          numberOfBars: 0,
          bars: [],
          beatsPerMeasure: 4,
          noteValuePerBeat: 4,
          genre: 'Standard',
        },
        errorMessage: '',
      };

      const action: AddChartInputActionTypes = {
        type: AddChartInputActions.SET_VALUE,
        payload: {
          key: 'numberOfBars',
          value: 12,
        },
      };

      const result = reducer(state, action);

      expect(result.chartInfo.bars.length).toEqual(12);
      expect(result.chartInfo.bars[0].chords.length).toEqual(4);
    });

    it('beatsPerMeasure creates the correct amount of chords per bar', () => {
      const state: AddChartInputStateTypes = {
        chartInfo: {
          name: '',
          defaultKey: 'C',
          numberOfBars: 12,
          bars: [],
          beatsPerMeasure: 4,
          noteValuePerBeat: 4,
          genre: 'Standard',
        },
        errorMessage: '',
      };
      const action: AddChartInputActionTypes = {
        type: AddChartInputActions.SET_VALUE,
        payload: {
          key: 'beatsPerMeasure',
          value: 5,
        },
      };
      const result = reducer(state, action);

      expect(result.chartInfo.bars.length).toEqual(12);
      expect(result.chartInfo.bars[0].chords.length).toEqual(5);
    });

    it('Other key value to change', () => {
      const state: AddChartInputStateTypes = {
        chartInfo: {
          name: '',
          defaultKey: 'C',
          numberOfBars: 0,
          bars: [],
          beatsPerMeasure: 4,
          noteValuePerBeat: 4,
          genre: 'Standard',
        },
        errorMessage: '',
      };
      const action: AddChartInputActionTypes = {
        type: AddChartInputActions.SET_VALUE,
        payload: {
          key: 'beatsPerMeasure',
          value: 6,
        },
      };

      const result = reducer(state, action);
      expect(result).toEqual({
        chartInfo: {
          name: '',
          defaultKey: 'C',
          numberOfBars: 0,
          bars: [],
          beatsPerMeasure: 6,
          noteValuePerBeat: 4,
          genre: 'Standard',
        },
        errorMessage: '',
      });
    });
  });

  it('UPDATE_CHORD_IN_BAR', () => {
    const state: AddChartInputStateTypes = {
      chartInfo: {
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
      },
      errorMessage: '',
    };
    const action: AddChartInputActionTypes = {
      type: AddChartInputActions.UPDATE_CHORD_IN_BAR,
      payload: {
        key: 'functionalNumber',
        value: 'b2',
        barIndex: 0,
        beatIndex: 0,
      },
    };

    const result = reducer(state, action);
    expect(result).toEqual({
      chartInfo: {
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
      },
      errorMessage: '',
    });
  });

  it('SET_ERROR_MESSAGE', () => {
    const state: AddChartInputStateTypes = {
      chartInfo: {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      },
      errorMessage: '',
    };
    const action: AddChartInputActionTypes = {
      type: AddChartInputActions.SET_ERROR_MESSAGE,
      payload: {
        errorMessage: 'Error here',
      },
    };

    const result = reducer(state, action);

    expect(result).toEqual({
      chartInfo: {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      },
      errorMessage: 'Error here',
    });
  });
});
