import {
  AllChartsActions,
  AllChartsActionTypes,
  AllChartsStateTypes,
} from './types';

const reducer = (state: AllChartsStateTypes, action: AllChartsActionTypes) => {
  switch (action.type) {
    case AllChartsActions.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AllChartsActions.INCREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case AllChartsActions.DECREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case AllChartsActions.LOAD_CHARTS_SUCCESS:
      return {
        ...state,
        charts: action.payload.charts,
        filteredCharts: action.payload.charts,
        isLoading: false,
        totalPages: Math.ceil(
          action.payload.charts.length / 5 < 1
            ? 0
            : action.payload.charts.length / 5
        ),
      };
    case AllChartsActions.SEARCH_TEXT:
      const filteredCharts = state.charts.filter(({ name }) =>
        name.toUpperCase().includes(action.payload.searchText.toUpperCase())
      );

      return {
        ...state,
        searchText: action.payload.searchText,
        filteredCharts,
        currentPage: 0,
        totalPages: Math.ceil(
          filteredCharts.length / 5 < 1 ? 0 : filteredCharts.length / 5
        ),
      };
    case AllChartsActions.SET_ERROR_MESSAGE:
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
