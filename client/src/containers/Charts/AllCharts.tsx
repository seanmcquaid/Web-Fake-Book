import { useCallback, useEffect, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { getAllCharts } from '../../services';
import { ChartInfoTypes } from '../../types/chartTypes';
import ChartsList from './ChartsList';

type StateTypes = {
  isLoading: boolean;
  charts: ChartInfoTypes[];
  searchText: string;
  filteredCharts: ChartInfoTypes[];
  totalPages: number;
  currentPage: number;
};

const initialState: StateTypes = {
  isLoading: false,
  charts: [],
  filteredCharts: [],
  searchText: '',
  totalPages: 0,
  currentPage: 0,
};

type ActionTypes =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: { charts: ChartInfoTypes[] } }
  | { type: 'SEARCH_TEXT'; payload: { searchText: string } }
  | { type: 'INCREMENT_PAGE' }
  | { type: 'DECREMENT_PAGE' };

const reducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'INCREMENT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'DECREMENT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case 'SUCCESS':
      return {
        ...state,
        charts: action.payload.charts,
        filteredCharts: action.payload.charts,
        totalPages: Math.ceil(
          action.payload.charts.length / 5 < 1
            ? 0
            : action.payload.charts.length / 5
        ),
      };
    case 'SEARCH_TEXT':
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
    default:
      return {
        ...state,
      };
  }
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
    dispatch({ type: 'LOADING' });

    getAllCharts().subscribe(
      ({ data }) => {
        const charts = data.charts;
        dispatch({ type: 'SUCCESS', payload: { charts } });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    dispatch({ type: 'SEARCH_TEXT', payload: { searchText } });
  }, []);

  const nextPageButtonOnClick = useCallback(() => {
    dispatch({ type: 'INCREMENT_PAGE' });
  }, []);

  const prevPageButtonOnClick = useCallback(() => {
    dispatch({ type: 'DECREMENT_PAGE' });
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
