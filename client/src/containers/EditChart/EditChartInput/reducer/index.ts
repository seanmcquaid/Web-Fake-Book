import {
  EditChartInputStateTypes,
  EditChartInputActionTypes,
  EditChartInputActions,
} from './types';

const reducer = (
  state: EditChartInputStateTypes,
  action: EditChartInputActionTypes
) => {
  switch (action.type) {
    case EditChartInputActions.LOADING:
      return { ...state, isLoading: true };
    case EditChartInputActions.UPDATE_CHORD_IN_BAR:
      const currentBars = [...state.chartInfo.bars];
      currentBars[action.payload.barIndex].chords[action.payload.beatIndex] = {
        ...currentBars[action.payload.barIndex].chords[
          action.payload.beatIndex
        ],
        [action.payload.key]: action.payload.value,
      };
      return {
        ...state,
        chartInfo: {
          ...state.chartInfo,
          bars: currentBars,
        },
      };
    case EditChartInputActions.LOAD_CHART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartInfo: {
          ...action.payload.chartInfo,
        },
      };
    case EditChartInputActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
