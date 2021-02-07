import { startCase } from 'cypress/types/lodash';
import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/Dropdown';
import { ChartContext } from '../../../context/AddChartContext';
import { setValue } from '../../../context/AddChartContext/actions';
import { Actions } from '../../../context/AddChartContext/types';
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
  const defaultKey = useMemo(() => state.defaultKey, [state.defaultKey]);
  const beatsPerMeasure = useMemo(() => state.beatsPerMeasure, [
    state.beatsPerMeasure,
  ]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.currentTarget;
      dispatch(setValue(name, value));
    },
    [dispatch]
  );

  return (
    <Form>
      <DropdownsContainer>
        <Dropdown
          options={defaultKeyOptions}
          value={defaultKey}
          onChange={onChange}
          name="defaultKey"
        />
      </DropdownsContainer>
      <Chart />
    </Form>
  );
};

const Form = styled.form``;

const DropdownsContainer = styled.div``;

export default ChartForm;
