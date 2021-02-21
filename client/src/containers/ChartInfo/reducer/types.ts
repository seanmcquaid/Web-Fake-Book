import { ChartInfoTypes } from '../../../types/chartTypes';

export type ChartInfoStateTypes = {
  isLoading: boolean;
  selectedKey: string;
  errorMessage: string;
  chartInfo: ChartInfoTypes;
};

export enum ChartInfoActions {
  LOADING = 'LOADING',
  LOAD_CHART_INFO_SUCCESS = 'LOAD_CHART_INFO_SUCCESS',
  CHANGE_KEY = 'CHANGE_KEY',
}

export type ChartInfoActionTypes =
  | { type: ChartInfoActions.LOADING }
  | {
      type: ChartInfoActions.LOAD_CHART_INFO_SUCCESS;
      payload: { chartInfo: ChartInfoTypes; key: string };
    }
  | { type: ChartInfoActions.CHANGE_KEY; payload: { key: string } };
