import { BarType, ChordTypes } from '../../../../types/chartTypes';
import {
  AddChartInputActionTypes,
  AddChartInputActions,
  AddChartInputStateTypes,
} from './types';

const reducer = (
  state: AddChartInputStateTypes,
  action: AddChartInputActionTypes
): AddChartInputStateTypes => {
  switch (action.type) {
    case AddChartInputActions.SET_VALUE:
      if (action.payload.key === 'numberOfBars') {
        let bars: BarType[] = [];

        for (let i = 0; i < action.payload.value; i++) {
          const bar: BarType = { chords: [] };
          for (let j = 0; j < state.chartInfo.beatsPerMeasure; j++) {
            const chord: ChordTypes = {
              functionalNumber: '%',
              chordQuality: '%',
              isSeventhChord: false,
            };
            bar.chords = [...bar.chords, chord];
          }
          bars = [...bars, bar];
        }

        const numberOfBars = action.payload.value as number;

        return {
          ...state,
          chartInfo: {
            ...state.chartInfo,
            numberOfBars,
            bars,
          },
        };
      }

      if (action.payload.key === 'beatsPerMeasure') {
        let bars: BarType[] = [];

        for (let i = 0; i < state.chartInfo.numberOfBars; i++) {
          const bar: BarType = { chords: [] };
          for (let j = 0; j < action.payload.value; j++) {
            const chord: ChordTypes = {
              functionalNumber: '%',
              chordQuality: '%',
              isSeventhChord: false,
            };
            bar.chords = [...bar.chords, chord];
          }
          bars = [...bars, bar];
        }

        const beatsPerMeasure = action.payload.value as number;

        return {
          ...state,
          chartInfo: {
            ...state.chartInfo,
            beatsPerMeasure,
            bars,
          },
        };
      }

      return {
        ...state,
        chartInfo: {
          ...state.chartInfo,
          [action.payload.key]: action.payload.value,
        },
      };
    case AddChartInputActions.UPDATE_CHORD_IN_BAR:
      const currentBars: BarType[] = [...state.chartInfo.bars];
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
    case AddChartInputActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
