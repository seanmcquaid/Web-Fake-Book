import {
  ChartInputStateTypes,
  ChartInputActionTypes,
  ChartInputActions,
} from './types';

const reducer = (
  state: ChartInputStateTypes,
  action: ChartInputActionTypes
) => {
  switch (action.type) {
    case ChartInputActions.LOADING:
      return { ...state, isLoading: true };
    case ChartInputActions.UPDATE_CHORD_IN_BAR:
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
    case ChartInputActions.LOAD_CHART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartInfo: {
          ...action.payload.chartInfo,
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
