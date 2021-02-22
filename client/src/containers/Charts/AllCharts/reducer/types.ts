import { ChartInfoTypes } from '../../../../types/chartTypes';

export enum AllChartsActions {
  LOADING = 'LOADING',
  LOAD_CHARTS_SUCCESS = 'LOAD_CHARTS_SUCCESS',
  SEARCH_TEXT = 'SEARCH_TEXT',
  INCREMENT_PAGE = 'INCREMENT_PAGE',
  DECREMENT_PAGE = 'DECREMENT_PAGE',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}

export type AllChartsStateTypes = {
  isLoading: boolean;
  charts: ChartInfoTypes[];
  searchText: string;
  filteredCharts: ChartInfoTypes[];
  totalPages: number;
  currentPage: number;
  errorMessage: string;
};

export type AllChartsActionTypes =
  | { type: AllChartsActions.LOADING }
  | {
      type: AllChartsActions.LOAD_CHARTS_SUCCESS;
      payload: { charts: ChartInfoTypes[] };
    }
  | { type: AllChartsActions.SEARCH_TEXT; payload: { searchText: string } }
  | { type: AllChartsActions.INCREMENT_PAGE }
  | { type: AllChartsActions.DECREMENT_PAGE }
  | {
      type: AllChartsActions.SET_ERROR_MESSAGE;
      payload: { errorMessage: string };
    };
