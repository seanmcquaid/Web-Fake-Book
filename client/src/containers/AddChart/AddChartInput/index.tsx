import styled from 'styled-components';
import Inputs from './Inputs';
import Button from '../../../components/Button';
import { useReducer } from 'react';
import { postAddChart } from '../../../services';
import { useHistory } from 'react-router-dom';
import reducer from './reducer';
import {
  setErrorMessageAction,
  setValueAction,
  updateChordInBarAction,
} from './reducer/actions';
import { AddChartInputStateTypes } from './reducer/types';
import P from '../../../components/Typography/P';
import UpdateChart from '../../../components/UpdateChart';

const initialState: AddChartInputStateTypes = {
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

const AddChartInput: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    chartInfo: {
      name,
      defaultKey,
      numberOfBars,
      bars,
      beatsPerMeasure,
      noteValuePerBeat,
      genre,
    },
    errorMessage,
  } = state;
  const history = useHistory();

  const inputValueOnChange = (name: string, value: string | number) => {
    dispatch(setValueAction(name, value));
  };

  const updateChordOnChange = (
    barIndex: number,
    beatIndex: number,
    name: string,
    value: string | boolean
  ) => {
    dispatch(updateChordInBarAction(barIndex, beatIndex, name, value));
  };

  const addChartButtonOnClick = () => {
    if (name.length === 0) {
      dispatch(setErrorMessageAction('Please enter a name!'));
      return;
    }

    if (numberOfBars === 0) {
      dispatch(setErrorMessageAction('Please select a number of bars!'));
      return;
    }

    postAddChart({ ...state.chartInfo }).subscribe(
      (resp) => {
        history.push('/charts');
      },
      (err) => {
        dispatch(setErrorMessageAction(err.response.data.error));
        throw err;
      }
    );
  };

  return (
    <AddChartInputContainer>
      <P data-testid="errorMessage">{errorMessage}</P>
      <Inputs
        valueOnChange={inputValueOnChange}
        defaultKey={defaultKey}
        numberOfBars={numberOfBars}
        name={name}
        noteValuePerBeat={noteValuePerBeat}
        genre={genre}
        beatsPerMeasure={beatsPerMeasure}
      />
      <Button type="button" onClick={addChartButtonOnClick}>
        Add This Chart
      </Button>
      <UpdateChart bars={bars} updateChordOnChange={updateChordOnChange} />
    </AddChartInputContainer>
  );
};

const AddChartInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default AddChartInput;
