import { ChartInfoTypes } from '../../../types/chartTypes';
import { ChartInfoActions, ChartInfoActionTypes } from './types';

export const loadingChartInfoAction = (): ChartInfoActionTypes => ({
  type: ChartInfoActions.LOADING,
});

export const loadChartInfoSuccess = (
  chartInfo: ChartInfoTypes,
  key: string
): ChartInfoActionTypes => ({
  type: ChartInfoActions.LOAD_CHART_INFO_SUCCESS,
  payload: { chartInfo, key },
});

export const changeKeyAction = (key: string): ChartInfoActionTypes => ({
  type: ChartInfoActions.CHANGE_KEY,
  payload: { key },
});

export const setErrorMessageAction = (
  errorMessage: string
): ChartInfoActionTypes => ({
  type: ChartInfoActions.SET_ERROR_MESSAGE,
  payload: { errorMessage },
});
