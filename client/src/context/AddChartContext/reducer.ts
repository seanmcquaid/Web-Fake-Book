import { initialState } from '.';
import { Actions, ActionTypes, BarType, ChordTypes, StateTypes } from './types';

const reducer = (
  state: StateTypes = initialState,
  action: ActionTypes
): StateTypes => {
  switch (action.type) {
    case Actions.SET_NUMBER_OF_BARS:
      let bars: BarType[] = [];

      for (let i = 0; i < action.payload.numberOfBars; i++) {
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

      return {
        ...state,
        numberOfBars: action.payload.numberOfBars,
        bars,
      };
    case Actions.SET_DEFAULT_KEY:
      return {
        ...state,
        defaultKey: action.payload.defaultKey,
      };
    case Actions.SET_GENRE:
      return {
        ...state,
        genre: action.payload.genre,
      };
    case Actions.UPDATE_CHORD_IN_BAR:
      const currentBars: BarType[] = [...state.bars];
      currentBars[action.payload.barIndex].chords[action.payload.beatIndex] = {
        ...currentBars[action.payload.barIndex].chords[
          action.payload.beatIndex
        ],
        [action.payload.name]: action.payload.value,
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
