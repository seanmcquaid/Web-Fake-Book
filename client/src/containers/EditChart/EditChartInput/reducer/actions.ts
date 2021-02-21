import { ChartInfoTypes } from '../../../../types/chartTypes';
import { EditChartInputActions, EditChartInputActionTypes } from './types';

export const loadingChart = (): EditChartInputActionTypes => ({
  type: EditChartInputActions.LOADING,
});

export const updateChordInBar = (
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

export const loadChartSuccess = (
  chartInfo: ChartInfoTypes
): EditChartInputActionTypes => ({
  type: EditChartInputActions.LOAD_CHART_SUCCESS,
  payload: {
    chartInfo,
  },
});
