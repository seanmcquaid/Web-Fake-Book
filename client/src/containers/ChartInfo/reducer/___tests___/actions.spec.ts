import {
  loadingChartInfoAction,
  loadChartInfoSuccess,
  changeKeyAction,
  setErrorMessageAction,
} from '../actions';

describe('Chart Info - Actions', () => {
  it('loadingChartInfoAction', () => {
    expect(loadingChartInfoAction()).toEqual({
      type: 'LOADING',
    });
  });

  it('loadChartInfoSuccess', () => {
    expect(
      loadChartInfoSuccess(
        {
          name: 'Chart Name',
          defaultKey: 'Db',
          numberOfBars: 0,
          bars: [],
          noteValuePerBeat: 4,
          beatsPerMeasure: 4,
          genre: 'Standard',
        },
        'Ab'
      )
    ).toEqual({
      payload: {
        chartInfo: {
          bars: [],
          beatsPerMeasure: 4,
          defaultKey: 'Db',
          genre: 'Standard',
          name: 'Chart Name',
          noteValuePerBeat: 4,
          numberOfBars: 0,
        },
        key: 'Ab',
      },
      type: 'LOAD_CHART_INFO_SUCCESS',
    });
  });

  it('changeKeyAction', () => {
    expect(changeKeyAction('Ab')).toEqual({
      payload: {
        key: 'Ab',
      },
      type: 'CHANGE_KEY',
    });
  });

  it('setErrorMessageAction', () => {
    expect(setErrorMessageAction('Error here')).toEqual({
      type: 'SET_ERROR_MESSAGE',
      payload: {
        errorMessage: 'Error here',
      },
    });
  });
});
