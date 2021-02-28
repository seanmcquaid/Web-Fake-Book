import { useEffect, useReducer } from 'react';
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
  setErrorMessageAction,
} from './reducer/actions';
import P from '../../../components/Typography/P';
import LoadingSpinner from '../../../components/LoadingSpinner';

const initialState: AllChartsStateTypes = {
  isLoading: false,
  charts: [],
  filteredCharts: [],
  searchText: '',
  totalPages: 0,
  currentPage: 0,
  errorMessage: '',
};

const AllCharts: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    searchText,
    filteredCharts,
    currentPage,
    totalPages,
    errorMessage,
  } = state;
  const currentCharts = filteredCharts.slice(
    currentPage * 5,
    (currentPage + 1) * 5
  );

  useEffect(() => {
    dispatch(loadingAllChartsAction());

    getAllCharts().subscribe(
      ({ data }) => {
        const charts = data.charts;
        dispatch(loadAllChartsSuccessAction(charts));
      },
      (err) => {
        dispatch(
          setErrorMessageAction(
            'There was a problem getting all charts right now, please try again later'
          )
        );
        throw err;
      }
    );
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    dispatch(searchTextAction(searchValue));
  };

  const nextPageButtonOnClick = () => {
    dispatch(incrementPageAction());
  };

  const prevPageButtonOnClick = () => {
    dispatch(decrementPageAction());
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <TextInput
        onChange={onChange}
        value={searchText}
        name="searchText"
        label="Search chart name"
        placeholder="Enter the chart name you'd like to search for"
      />
      <P>{errorMessage}</P>
      <ChartsList charts={currentCharts} />
      <PageButtonsContainer>
        <Button
          type="button"
          onClick={prevPageButtonOnClick}
          disabled={currentPage === 0}
        >
          Prev
        </Button>
        <PageNumber data-testid="pageNumberText">
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

const PageButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PageNumber = styled.span``;

export default AllCharts;
