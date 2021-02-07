import { ActionTypes, initialState, StateTypes } from '.';

const reducer = (state: StateTypes = initialState, action: ActionTypes) => {
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
