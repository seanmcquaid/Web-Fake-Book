import reducer from '../';
import {
  ChartInfoActions,
  ChartInfoActionTypes,
  ChartInfoStateTypes,
} from '../types';

describe('Chart Info - Reducer', () => {
  it('LOADING', () => {
    const state: ChartInfoStateTypes = {
      isLoading: false,
      selectedKey: 'Ab',
      errorMessage: '',
      chartInfo: {
        name: '',
        defaultKey: '',
        numberOfBars: 0,
        bars: [],
        noteValuePerBeat: 4,
        beatsPerMeasure: 4,
        genre: 'Standard',
      },
    };

    const action: ChartInfoActionTypes = {
      type: ChartInfoActions.LOADING,
    };

    expect(reducer(state, action)).toEqual({
      chartInfo: {
        bars: [],
        beatsPerMeasure: 4,
        defaultKey: '',
        genre: 'Standard',
        name: '',
        noteValuePerBeat: 4,
        numberOfBars: 0,
      },
      errorMessage: '',
      isLoading: true,
      selectedKey: 'Ab',
    });
  });

  it('LOAD_CHART_INFO_SUCCESS', () => {
    const state: ChartInfoStateTypes = {
      isLoading: false,
      selectedKey: 'Ab',
      errorMessage: '',
      chartInfo: {
        name: '',
        defaultKey: '',
        numberOfBars: 0,
        bars: [],
        noteValuePerBeat: 4,
        beatsPerMeasure: 4,
        genre: 'Standard',
      },
    };

    const action: ChartInfoActionTypes = {
      type: ChartInfoActions.LOAD_CHART_INFO_SUCCESS,
      payload: {
        chartInfo: {
          name: 'Chart name',
          defaultKey: 'Gb',
          numberOfBars: 0,
          bars: [],
          noteValuePerBeat: 4,
          beatsPerMeasure: 4,
          genre: 'Standard',
        },
        key: 'Gb',
      },
    };

    expect(reducer(state, action)).toEqual({
      chartInfo: {
        bars: [],
        beatsPerMeasure: 4,
        defaultKey: 'Gb',
        genre: 'Standard',
        name: 'Chart name',
        noteValuePerBeat: 4,
        numberOfBars: 0,
      },
      errorMessage: '',
      isLoading: false,
      selectedKey: 'Gb',
    });
  });

  it('CHANGE_KEY', () => {
    const state: ChartInfoStateTypes = {
      isLoading: false,
      selectedKey: 'Ab',
      errorMessage: '',
      chartInfo: {
        name: '',
        defaultKey: '',
        numberOfBars: 0,
        bars: [],
        noteValuePerBeat: 4,
        beatsPerMeasure: 4,
        genre: 'Standard',
      },
    };

    const action: ChartInfoActionTypes = {
      type: ChartInfoActions.CHANGE_KEY,
      payload: {
        key: 'Gb',
      },
    };

    expect(reducer(state, action)).toEqual({
      chartInfo: {
        bars: [],
        beatsPerMeasure: 4,
        defaultKey: '',
        genre: 'Standard',
        name: '',
        noteValuePerBeat: 4,
        numberOfBars: 0,
      },
      errorMessage: '',
      isLoading: true,
      selectedKey: 'Gb',
    });
  });

  it('SET_ERROR_MESSAGE', () => {
    const state: ChartInfoStateTypes = {
      isLoading: false,
      selectedKey: 'Ab',
      errorMessage: '',
      chartInfo: {
        name: '',
        defaultKey: '',
        numberOfBars: 0,
        bars: [],
        noteValuePerBeat: 4,
        beatsPerMeasure: 4,
        genre: 'Standard',
      },
    };

    const action: ChartInfoActionTypes = {
      type: ChartInfoActions.SET_ERROR_MESSAGE,
      payload: {
        errorMessage: 'Error here',
      },
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
      selectedKey: 'Ab',
      errorMessage: 'Error here',
      chartInfo: {
        name: '',
        defaultKey: '',
        numberOfBars: 0,
        bars: [],
        noteValuePerBeat: 4,
        beatsPerMeasure: 4,
        genre: 'Standard',
      },
    });
  });
});
