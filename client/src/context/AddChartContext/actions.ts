import {
  Actions,
  ActionTypes,
  BeatsPerMeasure,
  Chord,
  DefaultKey,
  Genre,
  NoteValuePerBeat,
  NumberOfBars,
} from './types';

export const setNumberOfBars = (numberOfBars: NumberOfBars): ActionTypes => ({
  type: Actions.SET_NUMBER_OF_BARS,
  payload: { numberOfBars },
});

export const setDefaultKey = (defaultKey: DefaultKey): ActionTypes => ({
  type: Actions.SET_DEFAULT_KEY,
  payload: { defaultKey },
});

export const setBeatsPerMeasure = (
  beatsPerMeasure: BeatsPerMeasure
): ActionTypes => ({
  type: Actions.SET_BEATS_PER_MEASURE,
  payload: { beatsPerMeasure },
});

export const setNoteValuePerBeat = (
  noteValuePerBeat: NoteValuePerBeat
): ActionTypes => ({
  type: Actions.SET_NOTE_VALUE_PER_BEAT,
  payload: { noteValuePerBeat },
});

export const setGenre = (genre: Genre): ActionTypes => ({
  type: Actions.SET_GENRE,
  payload: { genre },
});

export const updateChordInBar = (
  barIndex: number,
  beatIndex: number,
  chord: Chord
): ActionTypes => ({
  type: Actions.UPDATE_CHORD_IN_BAR,
  payload: { barIndex, beatIndex, chord },
});
