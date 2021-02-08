import { Actions, ActionTypes } from './types';

export const setValue = (key: string, value: string | number): ActionTypes => ({
  type: Actions.SET_VALUE,
  payload: {
    key,
    value,
  },
});

export const updateChordInBar = (
  barIndex: number,
  beatIndex: number,
  key: string,
  value: string | boolean
): ActionTypes => ({
  type: Actions.UPDATE_CHORD_IN_BAR,
  payload: { barIndex, beatIndex, key, value },
});

export const addChartSuccess = (): ActionTypes => ({
  type: Actions.ADD_CHART_SUCCESS,
});
