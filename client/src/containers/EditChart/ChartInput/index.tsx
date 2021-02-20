import { useCallback, useEffect, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import Button from '../../../components/Button';
import H2 from '../../../components/Typography/H2';
import { editChart, getChartInfo } from '../../../services';
import { useHistory, useParams } from 'react-router-dom';
import { ChartInputActions, ChartInputStateTypes } from './reducer/types';
import chartInputReducer from './reducer';

const initialState: ChartInputStateTypes = {
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

const ChartInput: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [state, dispatch] = useReducer(chartInputReducer, initialState);
  const isLoading = useMemo(() => state.isLoading, [state.isLoading]);
  const bars = useMemo(() => state.chartInfo.bars, [state.chartInfo.bars]);
  const name = useMemo(() => state.chartInfo.name, [state.chartInfo.name]);
  const history = useHistory();

  useEffect(() => {
    getChartInfo(id).subscribe(
      ({ data }) => {
        dispatch({
          type: ChartInputActions.LOAD_CHART_SUCCESS,
          payload: { chartInfo: data.chart as any },
        });
      },
      (err) => {
        throw err;
      }
    );
  }, [id]);

  const editButtonOnClick = useCallback(() => {
    editChart(id, state.chartInfo).subscribe(
      (resp) => {
        history.push('/charts');
      },
      (err) => {
        throw err;
      }
    );
  }, [id, state.chartInfo, history]);

  const updateChord = useCallback(
    (
      barIndex: number,
      beatIndex: number,
      key: string,
      value: string | boolean
    ) => {
      dispatch({
        type: ChartInputActions.UPDATE_CHORD_IN_BAR,
        payload: { barIndex, beatIndex, key, value },
      });
    },
    []
  );

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

export default ChartInput;
