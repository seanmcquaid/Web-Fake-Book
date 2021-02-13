import { useEffect, useMemo, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from '../../components/Dropdown';
import H1 from '../../components/Typography/H1';
import { ChartInfoTypes } from '../../context/AddChartContext/types';
import { getChartInfo } from '../../services';

const keyOptions = [
  'C',
  'F',
  'Bb',
  'Eb',
  'Ab',
  'Db',
  'Gb',
  'B',
  'E',
  'A',
  'D',
  'G',
];

type State = {
  isLoading: boolean;
  selectedKey: string;
  errorMessage: string;
};

type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: { chartInfo: ChartInfoTypes } }
  | { type: 'CHANGE_KEY'; payload: { key: string } };

const initialState = {
  isLoading: false,
  selectedKey: 'C',
  errorMessage: '',
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

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'CHANGE_KEY':
      return {
        ...state,
        isLoading: true,
        selectedKey: action.payload.key,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        chartInfo: action.payload.chartInfo,
      };
    default:
      return {
        ...state,
      };
  }
};

type ParamTypes = {
  id: string;
};

const ChartInfo: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const selectedKey = useMemo(() => state.selectedKey, [state.selectedKey]);

  useEffect(() => {
    dispatch({ type: 'LOADING' });

    getChartInfo(id).subscribe(
      (resp) => {
        const chartInfo: ChartInfoTypes = resp.data;
        dispatch({ type: 'SUCCESS', payload: { chartInfo } });
      },
      (err) => {
        throw err;
      }
    );
  }, [id]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.currentTarget.value;
    dispatch({
      type: 'CHANGE_KEY',
      payload: { key },
    });
    getChartInfo(id, key).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        throw err;
      }
    );
  };

  return (
    <PageContainer>
      <Header>
        <H1></H1>
      </Header>
      <Main>
        <Dropdown
          options={keyOptions}
          name="selectedKey"
          onChange={onChange}
          value={selectedKey}
        />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default ChartInfo;
