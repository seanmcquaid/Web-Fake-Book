import { initialState } from '.';
import { Actions, ActionTypes, BarType, ChordTypes, StateTypes } from './types';

const reducer = (
  state: StateTypes = initialState,
  action: ActionTypes
): StateTypes => {
  switch (action.type) {
    case Actions.SET_VALUE:
      if (action.payload.key === 'numberOfBars') {
        let bars: BarType[] = [];

        for (let i = 0; i < action.payload.value; i++) {
          const bar: BarType = { chords: [] };
          for (let j = 0; j < state.beatsPerMeasure; j++) {
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
          numberOfBars,
          bars,
        };
      }
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case Actions.UPDATE_CHORD_IN_BAR:
      const currentBars: BarType[] = [...state.bars];
      currentBars[action.payload.barIndex].chords[action.payload.beatIndex] = {
        ...currentBars[action.payload.barIndex].chords[
          action.payload.beatIndex
        ],
        [action.payload.key]: action.payload.value,
      };
      return {
        ...state,
        bars: currentBars,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
