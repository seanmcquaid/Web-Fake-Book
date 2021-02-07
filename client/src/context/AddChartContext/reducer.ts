import { Action, initialState, State } from '.';

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_BARS':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
