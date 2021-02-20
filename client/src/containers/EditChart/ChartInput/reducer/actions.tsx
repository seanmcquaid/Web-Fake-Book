import { ChartInfoTypes } from '../../../../types/chartTypes';
import { ChartInputActions, ChartInputActionTypes } from './types';

export const loadingChart = (): ChartInputActionTypes => ({
  type: ChartInputActions.LOADING,
});

export const updateChordInBar = (
  barIndex: number,
  beatIndex: number,
  key: string,
  value: boolean | string
): ChartInputActionTypes => ({
  type: ChartInputActions.UPDATE_CHORD_IN_BAR,
  payload: {
    barIndex,
    beatIndex,
    key,
    value,
  },
});

export const loadChartSuccess = (
  chartInfo: ChartInfoTypes
): ChartInputActionTypes => ({
  type: ChartInputActions.LOAD_CHART_SUCCESS,
  payload: {
    chartInfo,
  },
});
