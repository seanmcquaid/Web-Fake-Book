import { Actions, ActionTypes, initialState, StateTypes } from '.';

const reducer = (
  state: StateTypes = initialState,
  action: ActionTypes
): StateTypes => {
  switch (action.type) {
    case Actions.SET_NUMBER_OF_BARS:
      return {
        ...state,
        numberOfBars: action.payload.numberOfBars,
      };
    case Actions.SET_DEFAULT_KEY:
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
