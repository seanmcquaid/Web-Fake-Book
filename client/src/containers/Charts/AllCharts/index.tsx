import { useCallback, useEffect, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { getAllCharts } from '../../../services';
import ChartsList from './ChartsList';
import { AllChartsStateTypes } from './reducer/types';
import reducer from './reducer';
import {
  decrementPageAction,
  incrementPageAction,
  loadAllChartsSuccessAction,
  loadingAllChartsAction,
  searchTextAction,
} from './reducer/actions';

const initialState: AllChartsStateTypes = {
  isLoading: false,
  charts: [],
  filteredCharts: [],
  searchText: '',
  totalPages: 0,
  currentPage: 0,
};

const AllCharts: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchText = useMemo(() => state.searchText, [state.searchText]);
  const filteredCharts = useMemo(() => state.filteredCharts, [
    state.filteredCharts,
  ]);
  const currentPage = useMemo(() => state.currentPage, [state.currentPage]);
  const totalPages = useMemo(() => state.totalPages, [state.totalPages]);
  const currentCharts = useMemo(
    () => filteredCharts.slice(currentPage * 5, (currentPage + 1) * 5),
    [filteredCharts, currentPage]
  );

  useEffect(() => {
    dispatch(loadingAllChartsAction());

    getAllCharts().subscribe(
      ({ data }) => {
        const charts = data.charts;
        dispatch(loadAllChartsSuccessAction(charts));
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    dispatch(searchTextAction(searchValue));
  }, []);

  const nextPageButtonOnClick = useCallback(() => {
    dispatch(incrementPageAction());
  }, []);

  const prevPageButtonOnClick = useCallback(() => {
    dispatch(decrementPageAction());
  }, []);

  return (
    <>
      <TextInput onChange={onChange} value={searchText} name="searchText" />
      <ChartsList charts={currentCharts} />
      <PageButtonsContainer>
        <Button
          type="button"
          onClick={prevPageButtonOnClick}
          disabled={currentPage === 0}
        >
          Prev
        </Button>
        <PageNumber>
          Page {currentPage + 1} of {totalPages}
        </PageNumber>
        <Button
          type="button"
          onClick={nextPageButtonOnClick}
          disabled={currentPage + 1 === totalPages}
        >
          Next
        </Button>
      </PageButtonsContainer>
    </>
  );
};

const PageButtonsContainer = styled.div``;

const PageNumber = styled.span``;

export default AllCharts;
