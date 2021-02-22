import {
  decrementPageAction,
  incrementPageAction,
  loadAllChartsSuccessAction,
  loadingAllChartsAction,
  searchTextAction,
} from '../actions';

describe('AllCharts - Actions', () => {
  it('loadingAllChartsAction', () => {
    expect(loadingAllChartsAction()).toEqual({
      type: 'LOADING',
    });
  });

  it('loadAllChartsSuccessAction', () => {
    expect(loadAllChartsSuccessAction([])).toEqual({
      type: 'LOAD_CHARTS_SUCCESS',
      payload: {
        charts: [],
      },
    });
  });

  it('searchTextAction', () => {
    expect(searchTextAction('searchText')).toEqual({
      type: 'SEARCH_TEXT',
      payload: {
        searchText: 'searchText',
      },
    });
  });

  it('incrementPageAction', () => {
    expect(incrementPageAction()).toEqual({
      type: 'INCREMENT_PAGE',
    });
  });

  it('decrementPageAction', () => {
    expect(decrementPageAction()).toEqual({
      type: 'DECREMENT_PAGE',
    });
  });
});
