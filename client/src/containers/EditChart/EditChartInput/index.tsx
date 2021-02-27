import { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import H2 from '../../../components/Typography/H2';
import { editChart, getChartInfo } from '../../../services';
import { useHistory, useParams } from 'react-router-dom';
import { EditChartInputStateTypes } from './reducer/types';
import reducer from './reducer';
import {
  loadChartSuccessAction,
  loadingChartAction,
  setErrorMessageAction,
  updateChordInBarAction,
} from './reducer/actions';
import P from '../../../components/Typography/P';
import LoadingSpinner from '../../../components/LoadingSpinner';
import UpdateChart from '../../../components/UpdateChart';

const initialState: EditChartInputStateTypes = {
  isLoading: false,
  chartInfo: {
    name: '',
    defaultKey: 'C',
    numberOfBars: 0,
    bars: [],
    beatsPerMeasure: 4,
    noteValuePerBeat: 4,
    genre: 'Standard',
  },
  errorMessage: '',
};

type ParamTypes = {
  id: string;
};

const EditChartInput: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    chartInfo: { bars, name },
    errorMessage,
  } = state;

  const history = useHistory();

  useEffect(() => {
    dispatch(loadingChartAction());

    getChartInfo(id).subscribe(
      ({ data }) => {
        dispatch(loadChartSuccessAction(data.chart as any));
      },
      (err) => {
        dispatch(
          setErrorMessageAction(
            'There was a problem loading this chart, try again later'
          )
        );
        throw err;
      }
    );
  }, [id]);

  const editButtonOnClick = () => {
    editChart(id, state.chartInfo).subscribe(
      (resp) => {
        history.push('/charts');
      },
      (err) => {
        dispatch(
          setErrorMessageAction(
            'There was a problem editing this chart, try again later'
          )
        );
        throw err;
      }
    );
  };

  const updateChordOnChange = (
    barIndex: number,
    beatIndex: number,
    key: string,
    value: string | boolean
  ) => {
    dispatch(updateChordInBarAction(barIndex, beatIndex, key, value));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <EditChartInputContainer>
      <H2>{name}</H2>
      <P>{errorMessage}</P>
      <Button type="button" onClick={editButtonOnClick}>
        Edit This Chart
      </Button>
      <UpdateChart bars={bars} updateChordOnChange={updateChordOnChange} />
    </EditChartInputContainer>
  );
};

const EditChartInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default EditChartInput;
