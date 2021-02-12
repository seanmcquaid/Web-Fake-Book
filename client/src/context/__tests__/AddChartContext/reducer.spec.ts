import reducer from '../../AddChartContext/reducer';
import {
  Actions,
  ActionTypes,
  ChartInfoTypes,
} from '../../AddChartContext/types';

describe('Add Chart Context - Reducer', () => {
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
      const action: ActionTypes = {
        type: Actions.SET_VALUE,
        payload: {
          key: 'numberOfBars',
          value: 12,
        },
      };

      const result = reducer(state, action);

      expect(result.bars.length).toEqual(12);
      expect(result.bars[0].chords.length).toEqual(4);
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
      const action: ActionTypes = {
        type: Actions.SET_VALUE,
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

  it('UPDATE_CHORD_IN_BAR', () => {});

  it('ADD_CHART_SUCCESS clears state back to initial state', () => {});
});
