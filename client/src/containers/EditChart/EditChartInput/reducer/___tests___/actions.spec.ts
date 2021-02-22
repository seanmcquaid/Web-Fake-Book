import {
  loadChartSuccessAction,
  loadingChartAction,
  setErrorMessageAction,
  updateChordInBarAction,
} from '../actions';

describe('EditChartInput - Actions', () => {
  it('loadingChartAction', () => {
    expect(loadingChartAction()).toEqual({
      type: 'LOADING',
    });
  });

  it('updateChordInBarAction', () => {
    expect(updateChordInBarAction(0, 0, 'isSeventhChord', true)).toEqual({
      type: 'UPDATE_CHORD_IN_BAR',
      payload: {
        barIndex: 0,
        beatIndex: 0,
        key: 'isSeventhChord',
        value: true,
      },
    });
  });

  it('loadChartSuccessAction', () => {
    const chartInfo = {
      name: 'NAME',
      bars: [],
      numberOfBars: 0,
      noteValuePerBeat: 4,
      beatsPerMeasure: 4,
      defaultKey: 'C',
      genre: 'Standard',
    };
    expect(loadChartSuccessAction(chartInfo)).toEqual({
      type: 'LOAD_CHART_SUCCESS',
      payload: {
        chartInfo,
      },
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
