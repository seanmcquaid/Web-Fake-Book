import { createContext, Dispatch, useReducer } from 'react';
import reducer from './reducer';
import { ActionTypes, ChartInfoTypes } from './types';

export const initialState: ChartInfoTypes = {
  name: '',
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

export const ChartContext = createContext<{
  state: ChartInfoTypes;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

type AddChartContextProps = {
  preloadedState?: ChartInfoTypes;
};

const AddChartContext: React.FC<AddChartContextProps> = ({
  children,
  preloadedState,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    preloadedState ? preloadedState : initialState
  );

  return (
    <ChartContext.Provider value={{ state, dispatch }}>
      {children}
    </ChartContext.Provider>
  );
};

export default AddChartContext;
