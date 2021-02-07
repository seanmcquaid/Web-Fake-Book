import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../../../context/AddChartContext';
import Chart from './Chart';

const defaultKeyOptions = [
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
const numberOfBarsOptions = [0, 12, 16, 32];
const beatsPerMeasureOptions = [2, 3, 4, 5, 6, 7, 8];
const noteValuePerBeatOptions = [4, 8, 16, 32];
const genreOptions = [
  'Bebop',
  'Hard Bop',
  'Blues',
  'Afro Cuban',
  'Cool',
  'Dixieland',
  'Free',
  'Funk',
  'Fusion',
  'Latin',
  'Standard',
  'Swing',
];

const ChartForm: React.FC = () => {
  const { state, dispatch } = useContext(ChartContext);
  const beatsPerMeasure = useMemo(() => state.beatsPerMeasure, [
    state.beatsPerMeasure,
  ]);

  const onChange = useCallback((event: Event) => {}, []);

  return (
    <Form>
      <Chart />
    </Form>
  );
};

const Form = styled.form``;

const DropdownsContainer = styled.div``;

export default ChartForm;
