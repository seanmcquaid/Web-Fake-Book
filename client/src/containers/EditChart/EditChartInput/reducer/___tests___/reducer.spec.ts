import reducer from '..';
import {
  EditChartInputActions,
  EditChartInputActionTypes,
  EditChartInputStateTypes,
} from '../types';

describe('EditChartInput - Reducer', () => {
  it('LOADING', () => {
    const state: EditChartInputStateTypes = {
      isLoading: false,
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

    const action: EditChartInputActionTypes = {
      type: EditChartInputActions.LOADING,
    };

    expect(reducer(state, action)).toEqual({
      isLoading: true,
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
    });
  });

  it('UPDATE_CHORD_IN_BAR', () => {
    const state: EditChartInputStateTypes = {
      isLoading: false,
      chartInfo: {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [
          {
            chords: [
              {
                functionalNumber: '1',
                chordQuality: 'Major',
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

    const action: EditChartInputActionTypes = {
      type: EditChartInputActions.UPDATE_CHORD_IN_BAR,
      payload: {
        barIndex: 0,
        beatIndex: 0,
        key: 'isSeventhChord',
        value: true,
      },
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
      chartInfo: {
        name: '',
        defaultKey: 'C',
        numberOfBars: 0,
        bars: [
          {
            chords: [
              {
                functionalNumber: '1',
                chordQuality: 'Major',
                isSeventhChord: true,
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

  it('LOAD_CHART_SUCCESS', () => {
    const state: EditChartInputStateTypes = {
      isLoading: true,
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

    const action: EditChartInputActionTypes = {
      type: EditChartInputActions.LOAD_CHART_SUCCESS,
      payload: {
        chartInfo: {
          name: 'New Chart',
          defaultKey: 'Db',
          numberOfBars: 12,
          bars: [],
          beatsPerMeasure: 4,
          noteValuePerBeat: 4,
          genre: 'Standard',
        },
      },
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
      chartInfo: {
        name: 'New Chart',
        defaultKey: 'Db',
        numberOfBars: 12,
        bars: [],
        beatsPerMeasure: 4,
        noteValuePerBeat: 4,
        genre: 'Standard',
      },
      errorMessage: '',
    });
  });

  it('SET_ERROR_MESSAGE', () => {
    const state: EditChartInputStateTypes = {
      isLoading: false,
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
    };

    const action: EditChartInputActionTypes = {
      type: EditChartInputActions.SET_ERROR_MESSAGE,
      payload: {
        errorMessage: 'Error here',
      },
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
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
