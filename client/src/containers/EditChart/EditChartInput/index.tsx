import { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import Button from '../../../components/Button';
import H2 from '../../../components/Typography/H2';
import { editChart, getChartInfo } from '../../../services';
import { useHistory, useParams } from 'react-router-dom';
import { EditChartInputStateTypes } from './reducer/types';
import reducer from './reducer';
import {
  loadChartSuccessAction,
  loadingChartAction,
  updateChordInBarAction,
} from './reducer/actions';

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
  } = state;

  const history = useHistory();

  useEffect(() => {
    dispatch(loadingChartAction());

    getChartInfo(id).subscribe(
      ({ data }) => {
        dispatch(loadChartSuccessAction(data.chart as any));
      },
      (err) => {
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
        throw err;
      }
    );
  };

  const updateChord = (
    barIndex: number,
    beatIndex: number,
    key: string,
    value: string | boolean
  ) => {
    dispatch(updateChordInBarAction(barIndex, beatIndex, key, value));
  };

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <H2>{name}</H2>
      <Button type="button" onClick={editButtonOnClick}>
        Edit This Chart
      </Button>
      <StyledChart>
        {bars.map(({ chords }, barIndex) => (
          <Bar key={nanoid()}>
            Bar {barIndex + 1}
            <Chords>
              {chords.map((chord, beatIndex) => (
                <Chord
                  key={nanoid()}
                  barIndex={barIndex}
                  beatIndex={beatIndex}
                  functionalNumber={chord.functionalNumber}
                  chordQuality={chord.chordQuality}
                  isSeventhChord={chord.isSeventhChord}
                  updateChord={updateChord}
                />
              ))}
            </Chords>
          </Bar>
        ))}
      </StyledChart>
    </>
  );
};

const StyledChart = styled.ol``;

const Bar = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Chords = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default EditChartInput;
