import { createContext, Dispatch, useReducer } from 'react';
import reducer from './reducer';
import { ActionTypes, StateTypes } from './types';

export const initialState: StateTypes = {
  defaultKey: 'C',
  numberOfBars: 0,
  bars: [],
  beatsPerMeasure: 4,
  noteValuePerBeat: 4,
  genre: 'Standard',
};

const ChartContext = createContext<{
  state: StateTypes;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AddChartContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChartContext.Provider value={{ state, dispatch }}>
      {children}
    </ChartContext.Provider>
  );
};

export default AddChartContext;
