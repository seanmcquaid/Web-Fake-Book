import { ChartInfoTypes } from '../../../../types/chartTypes';

export enum ChartInputActions {
  LOADING = 'LOADING',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
  LOAD_CHART_SUCCESS = 'LOAD_CHART_SUCCESS',
}

export type ChartInputStateTypes = {
  isLoading: boolean;
  chartInfo: ChartInfoTypes;
};

export type ChartInputActionTypes =
  | { type: ChartInputActions.LOADING }
  | {
      type: ChartInputActions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: boolean | string;
      };
    }
  | {
      type: ChartInputActions.LOAD_CHART_SUCCESS;
      payload: {
        chartInfo: ChartInfoTypes;
      };
    };
