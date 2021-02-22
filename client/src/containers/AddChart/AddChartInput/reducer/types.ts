export enum AddChartActions {
  SET_VALUE = 'SET_VALUE',
  UPDATE_CHORD_IN_BAR = 'UPDATE_CHORD_IN_BAR',
  ADD_CHART_SUCCESS = 'ADD_CHART_SUCCESS',
}

export type AddChartActionTypes =
  | {
      type: AddChartActions.SET_VALUE;
      payload: {
        key: string;
        value: string | number;
      };
    }
  | {
      type: AddChartActions.UPDATE_CHORD_IN_BAR;
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: string | boolean;
      };
    };
