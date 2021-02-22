import reducer from '..';
import {
  AllChartsActions,
  AllChartsActionTypes,
  AllChartsStateTypes,
} from '../types';

describe('AllCharts - Reducer', () => {
  it('LOADING', () => {
    const state: AllChartsStateTypes = {
      isLoading: false,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.LOADING,
    };

    expect(reducer(state, action)).toEqual({
      charts: [],
      currentPage: 0,
      filteredCharts: [],
      isLoading: true,
      searchText: '',
      totalPages: 0,
      errorMessage: '',
    });
  });

  it('LOAD_CHARTS_SUCCESS', () => {
    const state: AllChartsStateTypes = {
      isLoading: true,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.LOAD_CHARTS_SUCCESS,
      payload: {
        charts: [
          {
            name: 'NAME',
            bars: [],
            numberOfBars: 0,
            noteValuePerBeat: 4,
            beatsPerMeasure: 4,
            defaultKey: 'C',
            genre: 'Standard',
          },
        ],
      },
    };

    expect(reducer(state, action)).toEqual({
      isLoading: false,
      charts: [
        {
          name: 'NAME',
          bars: [],
          numberOfBars: 0,
          noteValuePerBeat: 4,
          beatsPerMeasure: 4,
          defaultKey: 'C',
          genre: 'Standard',
        },
      ],
      filteredCharts: [
        {
          name: 'NAME',
          bars: [],
          numberOfBars: 0,
          noteValuePerBeat: 4,
          beatsPerMeasure: 4,
          defaultKey: 'C',
          genre: 'Standard',
        },
      ],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    });
  });

  it('SEARCH_TEXT', () => {
    const state: AllChartsStateTypes = {
      isLoading: false,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.SEARCH_TEXT,
      payload: { searchText: 'SEARCH TEXT' },
    };

    expect(reducer(state, action)).toEqual({
      charts: [],
      currentPage: 0,
      filteredCharts: [],
      isLoading: false,
      searchText: 'SEARCH TEXT',
      totalPages: 0,
      errorMessage: '',
    });
  });

  it('INCREMENT_PAGE', () => {
    const state: AllChartsStateTypes = {
      isLoading: false,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.INCREMENT_PAGE,
    };

    expect(reducer(state, action)).toEqual({
      charts: [],
      currentPage: 1,
      filteredCharts: [],
      isLoading: false,
      searchText: '',
      totalPages: 0,
      errorMessage: '',
    });
  });

  it('DECREMENT_PAGE', () => {
    const state: AllChartsStateTypes = {
      isLoading: false,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 1,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.DECREMENT_PAGE,
    };

    expect(reducer(state, action)).toEqual({
      charts: [],
      currentPage: 0,
      filteredCharts: [],
      isLoading: false,
      searchText: '',
      totalPages: 0,
      errorMessage: '',
    });
  });

  it('SET_ERROR_MESSAGE', () => {
    const state: AllChartsStateTypes = {
      isLoading: false,
      charts: [],
      filteredCharts: [],
      searchText: '',
      totalPages: 0,
      currentPage: 0,
      errorMessage: '',
    };

    const action: AllChartsActionTypes = {
      type: AllChartsActions.SET_ERROR_MESSAGE,
      payload: {
        errorMessage: 'Error here',
      },
    };

    expect(reducer(state, action)).toEqual({
      charts: [],
      currentPage: 0,
      filteredCharts: [],
      isLoading: false,
      searchText: '',
      totalPages: 0,
      errorMessage: 'Error here',
    });
  });
});
