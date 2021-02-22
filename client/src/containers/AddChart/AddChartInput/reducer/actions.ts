import { AddChartInputActionTypes, AddChartInputActions } from './types';

export const setValueAction = (
  key: string,
  value: string | number
): AddChartInputActionTypes => ({
  type: AddChartInputActions.SET_VALUE,
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
): AddChartInputActionTypes => ({
  type: AddChartInputActions.UPDATE_CHORD_IN_BAR,
  payload: { barIndex, beatIndex, key, value },
});

export const setErrorMessageAction = (
  errorMessage: string
): AddChartInputActionTypes => ({
  type: AddChartInputActions.SET_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});
