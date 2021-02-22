import { ChartInfoTypes } from '../../../../types/chartTypes';
import { EditChartInputActions, EditChartInputActionTypes } from './types';

export const loadingChartAction = (): EditChartInputActionTypes => ({
  type: EditChartInputActions.LOADING,
});

export const updateChordInBarAction = (
  barIndex: number,
  beatIndex: number,
  key: string,
  value: boolean | string
): EditChartInputActionTypes => ({
  type: EditChartInputActions.UPDATE_CHORD_IN_BAR,
  payload: {
    barIndex,
    beatIndex,
    key,
    value,
  },
});

export const loadChartSuccessAction = (
  chartInfo: ChartInfoTypes
): EditChartInputActionTypes => ({
  type: EditChartInputActions.LOAD_CHART_SUCCESS,
  payload: {
    chartInfo,
  },
});

export const setErrorMessageAction = (
  errorMessage: string
): EditChartInputActionTypes => ({
  type: EditChartInputActions.SET_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});
