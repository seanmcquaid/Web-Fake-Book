import { ChartInfoTypes } from '../../../../types/chartTypes';
import { AllChartsActions, AllChartsActionTypes } from './types';

export const loadingAllChartsAction = (): AllChartsActionTypes => ({
  type: AllChartsActions.LOADING,
});

export const loadAllChartsSuccessAction = (
  charts: ChartInfoTypes[]
): AllChartsActionTypes => ({
  type: AllChartsActions.LOAD_CHARTS_SUCCESS,
  payload: {
    charts,
  },
});

export const searchTextAction = (searchText: string): AllChartsActionTypes => ({
  type: AllChartsActions.SEARCH_TEXT,
  payload: {
    searchText,
  },
});

export const incrementPageAction = (): AllChartsActionTypes => ({
  type: AllChartsActions.INCREMENT_PAGE,
});

export const decrementPageAction = (): AllChartsActionTypes => ({
  type: AllChartsActions.DECREMENT_PAGE,
});

export const setErrorMessageAction = (
  errorMessage: string
): AllChartsActionTypes => ({
  type: AllChartsActions.SET_ERROR_MESSAGE,
  payload: { errorMessage },
});
