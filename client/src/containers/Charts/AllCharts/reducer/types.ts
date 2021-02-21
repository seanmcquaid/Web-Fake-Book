import { ChartInfoTypes } from '../../../../types/chartTypes';

export enum AllChartsActions {
  LOADING = 'LOADING',
  LOAD_CHARTS_SUCCESS = 'LOAD_CHARTS_SUCCESS',
  SEARCH_TEXT = 'SEARCH_TEXT',
  INCREMENT_PAGE = 'INCREMENT_PAGE',
  DECREMENT_PAGE = 'DECREMENT_PAGE',
}

export type AllChartsStateTypes = {
  isLoading: boolean;
  charts: ChartInfoTypes[];
  searchText: string;
  filteredCharts: ChartInfoTypes[];
  totalPages: number;
  currentPage: number;
};

export type AllChartsActionTypes =
  | { type: AllChartsActions.LOADING }
  | {
      type: AllChartsActions.LOAD_CHARTS_SUCCESS;
      payload: { charts: ChartInfoTypes[] };
    }
  | { type: AllChartsActions.SEARCH_TEXT; payload: { searchText: string } }
  | { type: AllChartsActions.INCREMENT_PAGE }
  | { type: AllChartsActions.DECREMENT_PAGE };
