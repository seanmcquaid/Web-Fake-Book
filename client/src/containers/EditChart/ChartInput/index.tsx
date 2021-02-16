import { useCallback, useEffect, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import Chord from './Chord';
import { nanoid } from 'nanoid';
import Button from '../../../components/Button';
import { ChartInfoTypes } from '../../../types/chartTypes';
import H2 from '../../../components/Typography/H2';
import { editChart, getChartInfo } from '../../../services';
import { useHistory, useParams } from 'react-router-dom';

type State = {
  isLoading: boolean;
  chartInfo: ChartInfoTypes;
};

const initialState: State = {
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

type Action =
  | { type: 'LOADING' }
  | {
      type: 'UPDATE_CHORD_IN_BAR';
      payload: {
        barIndex: number;
        beatIndex: number;
        key: string;
        value: boolean | string;
      };
    }
  | {
      type: 'CHART_SUCCESS';
      payload: {
        chartInfo: ChartInfoTypes;
      };
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'UPDATE_CHORD_IN_BAR':
      const currentBars = [...state.chartInfo.bars];
      currentBars[action.payload.barIndex].chords[action.payload.beatIndex] = {
        ...currentBars[action.payload.barIndex].chords[
          action.payload.beatIndex
        ],
        [action.payload.key]: action.payload.value,
      };
      return {
        ...state,
        chartInfo: {
          ...state.chartInfo,
          bars: currentBars,
        },
      };
    case 'CHART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        chartInfo: {
          ...action.payload.chartInfo,
        },
      };

    default:
      return { ...state };
  }
};

type ParamTypes = {
  id: string;
};

const ChartInput: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const isLoading = useMemo(() => state.isLoading, [state.isLoading]);
  const bars = useMemo(() => state.chartInfo.bars, [state.chartInfo.bars]);
  const name = useMemo(() => state.chartInfo.name, [state.chartInfo.name]);
  const history = useHistory();

  useEffect(() => {
    getChartInfo(id).subscribe(
      ({ data }) => {
        console.log(data);
        dispatch({
          type: 'CHART_SUCCESS',
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
        type: 'UPDATE_CHORD_IN_BAR',
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
