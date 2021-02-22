import {
  ChartInfoActionTypes,
  ChartInfoStateTypes,
  ChartInfoActions,
} from './types';

const reducer = (state: ChartInfoStateTypes, action: ChartInfoActionTypes) => {
  switch (action.type) {
    case ChartInfoActions.LOADING:
      return { ...state, isLoading: true };
    case ChartInfoActions.CHANGE_KEY:
      return {
        ...state,
        isLoading: true,
        selectedKey: action.payload.key,
      };
    case ChartInfoActions.LOAD_CHART_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartInfo: action.payload.chartInfo,
        selectedKey: action.payload.key,
      };
    case ChartInfoActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
