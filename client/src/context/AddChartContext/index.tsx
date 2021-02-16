import { createContext, Dispatch, useReducer } from 'react';
import reducer from './reducer';
import { ChartInfoTypes } from '../../types/chartTypes';
import { ActionTypes } from './types';

export const initialState: ChartInfoTypes = {
  name: '',
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

export const AddChartContext = createContext<{
  state: ChartInfoTypes;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

type AddChartContextProps = {
  preloadedState?: ChartInfoTypes;
};

const AddChartProvider: React.FC<AddChartContextProps> = ({
  children,
  preloadedState,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    preloadedState ? preloadedState : initialState
  );

  return (
    <AddChartContext.Provider value={{ state, dispatch }}>
      {children}
    </AddChartContext.Provider>
  );
};

export default AddChartProvider;
