import { ChartInfoTypes } from '../../../../types/chartTypes';

export enum EditChartInputActions {
  LOADING = 'LOADING',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
  LOAD_CHART_SUCCESS = 'LOAD_CHART_SUCCESS',
}

export type EditChartInputStateTypes = {
  isLoading: boolean;
  chartInfo: ChartInfoTypes;
};

export type EditChartInputActionTypes =
  | { type: EditChartInputActions.LOADING }
  | {
      type: EditChartInputActions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: boolean | string;
      };
    }
  | {
      type: EditChartInputActions.LOAD_CHART_SUCCESS;
      payload: {
        chartInfo: ChartInfoTypes;
      };
    };
