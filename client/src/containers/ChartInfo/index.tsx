import { useEffect, useReducer } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import LinkButton from '../../components/LinkButton';
import H1 from '../../components/Typography/H1';
import { deleteChart, getChartInfo } from '../../services';
import Chart from './Chart';
import reducer from './reducer';
import {
  changeKeyAction,
  loadChartInfoSuccess,
  loadingChartInfoAction,
} from './reducer/actions';
import { ChartInfoStateTypes } from './reducer/types';

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

const initialState: ChartInfoStateTypes = {
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

type ParamTypes = {
  id: string;
};

const ChartInfo: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    selectedKey,
    chartInfo: { name, bars, beatsPerMeasure, noteValuePerBeat },
  } = state;

  useEffect(() => {
    dispatch(loadingChartInfoAction());

    getChartInfo(id).subscribe(
      (resp) => {
        const chartInfo = resp.data.chart;
        const key = resp.data.currentKey;
        dispatch(loadChartInfoSuccess(chartInfo, key));
      },
      (err) => {
        throw err;
      }
    );
  }, [id]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.currentTarget.value;
    dispatch(changeKeyAction(key));
    getChartInfo(id, key).subscribe(
      (resp) => {
        const chartInfo = resp.data.chart;
        const key = resp.data.currentKey;
        dispatch(loadChartInfoSuccess(chartInfo, key));
      },
      (err) => {
        throw err;
      }
    );
  };

  const deleteButtonOnClick = () => {
    deleteChart(id).subscribe(
      (resp) => {
        history.push('/charts');
      },
      (err) => {
        throw err;
      }
    );
  };

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <PageContainer>
      <Header>
        <H1>{name}</H1>
      </Header>
      <Main>
        <Dropdown
          options={keyOptions}
          name="selectedKey"
          onChange={onChange}
          value={selectedKey}
        />
        <Chart
          bars={bars}
          beatsPerMeasure={beatsPerMeasure}
          noteValuePerBeat={noteValuePerBeat}
        />
        <ButtonsContainer>
          <Button type="button" onClick={deleteButtonOnClick}>
            Delete
          </Button>
          <LinkButton to={`/editChart/${id}`}>Edit</LinkButton>
        </ButtonsContainer>
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const ButtonsContainer = styled.div``;

export default ChartInfo;
