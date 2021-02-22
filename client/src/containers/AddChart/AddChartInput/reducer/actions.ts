import { AddChartActionTypes, AddChartActions } from './types';

export const setValueAction = (
  key: string,
  value: string | number
): AddChartActionTypes => ({
  type: AddChartActions.SET_VALUE,
  payload: {
    key,
    value,
  },
});

export const updateChordInBarAction = (
  barIndex: number,
  beatIndex: number,
  key: string,
  value: string | boolean
): AddChartActionTypes => ({
  type: AddChartActions.UPDATE_CHORD_IN_BAR,
  payload: { barIndex, beatIndex, key, value },
});
