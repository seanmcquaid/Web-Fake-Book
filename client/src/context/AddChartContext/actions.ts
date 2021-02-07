import {
  Actions,
  ActionTypes,
  BeatsPerMeasureTypes,
  ChordTypes,
  ChordQualityTypes,
  DefaultKeyTypes,
  FunctionalNumberTypes,
  GenreTypes,
  NoteValuePerBeatTypes,
  NumberOfBarsTypes,
} from './types';

export const setNumberOfBars = (
  numberOfBars: NumberOfBarsTypes
): ActionTypes => ({
  type: Actions.SET_NUMBER_OF_BARS,
  payload: { numberOfBars },
});

export const setDefaultKey = (defaultKey: DefaultKeyTypes): ActionTypes => ({
  type: Actions.SET_DEFAULT_KEY,
  payload: { defaultKey },
});

export const setBeatsPerMeasure = (
  beatsPerMeasure: BeatsPerMeasureTypes
): ActionTypes => ({
  type: Actions.SET_BEATS_PER_MEASURE,
  payload: { beatsPerMeasure },
});

export const setNoteValuePerBeat = (
  noteValuePerBeat: NoteValuePerBeatTypes
): ActionTypes => ({
  type: Actions.SET_NOTE_VALUE_PER_BEAT,
  payload: { noteValuePerBeat },
});

export const setGenre = (genre: GenreTypes): ActionTypes => ({
  type: Actions.SET_GENRE,
  payload: { genre },
});

export const updateChordInBar = (
  barIndex: number,
  beatIndex: number,
  name: string,
  value: string | boolean
): ActionTypes => ({
  type: Actions.UPDATE_CHORD_IN_BAR,
  payload: { barIndex, beatIndex, name, value },
});
