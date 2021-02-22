import { ChartInfoTypes } from '../../../../types/chartTypes';

export enum AddChartInputActions {
  SET_VALUE = 'SET_VALUE',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
  ADD_CHART_SUCCESS = 'ADD_CHART_SUCCESS',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

export type AddChartInputStateTypes = {
  errorMessage: string;
  chartInfo: ChartInfoTypes;
};

export type AddChartInputActionTypes =
  | {
      type: AddChartInputActions.SET_VALUE;
      payload: {
        key: string;
        value: string | number;
      };
    }
  | {
      type: AddChartInputActions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: string | boolean;
      };
    }
  | {
      type: AddChartInputActions.SET_ERROR_MESSAGE;
      payload: { errorMessage: string };
    };
