import { useCallback, useEffect, useMemo, useReducer } from 'react';
import styled from 'styled-components';
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
  resultsPerPage: number;
  currentCharts: ChartInfoTypes[];
};

const initialState: StateTypes = {
  isLoading: false,
  charts: [],
  filteredCharts: [],
  searchText: '',
  totalPages: 0,
  currentPage: 0,
  resultsPerPage: 0,
  currentCharts: [],
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
    case 'SUCCESS':
      return {
        ...state,
        charts: action.payload.charts,
        filteredCharts: action.payload.charts,
      };
    case 'SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload.searchText,
        filteredCharts: state.charts.filter(({ name }) =>
          name.includes(action.payload.searchText)
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
  const currentCharts = useMemo(() => state.currentCharts, [
    state.currentCharts,
  ]);

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

  return (
    <>
      <TextInput onChange={onChange} value={searchText} name="searchText" />
      <ChartsList charts={currentCharts} />
      <ButtonsContainer></ButtonsContainer>
    </>
  );
};

const ButtonsContainer = styled.div``;

export default AllCharts;
