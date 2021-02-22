import styled from 'styled-components';
import Inputs from './Inputs';
import Chart from './Chart';
import Button from '../../../components/Button';
import { useReducer } from 'react';
import { postAddChart } from '../../../services';
import { useHistory } from 'react-router-dom';
import reducer from './reducer';
import { ChartInfoTypes } from '../../../types/chartTypes';
import { setValueAction, updateChordInBarAction } from './reducer/actions';

const initialState: ChartInfoTypes = {
  name: '',
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

const AddChartInput: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    name,
    defaultKey,
    numberOfBars,
    bars,
    beatsPerMeasure,
    noteValuePerBeat,
    genre,
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
    postAddChart({ ...state }).subscribe(
      (resp) => {
        history.push('/charts');
      },
      (err) => {
        throw err;
      }
    );
  };

  return (
    <AddChartInputContainer>
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
      <Chart bars={bars} updateChordOnChange={updateChordOnChange} />
    </AddChartInputContainer>
  );
};

const AddChartInputContainer = styled.div``;

export default AddChartInput;
