import {
  setErrorMessageAction,
  setValueAction,
  updateChordInBarAction,
} from '../actions';

describe('Chart Input - Actions', () => {
  it('setValueAction', () => {
    expect(setValueAction('numberOfBars', 12)).toEqual({
      type: 'SET_VALUE',
      payload: {
        key: 'numberOfBars',
        value: 12,
      },
    });
  });

  it('updateChordInBarAction', () => {
    expect(updateChordInBarAction(0, 0, 'functionalNumber', 'b2')).toEqual({
      payload: {
        barIndex: 0,
        beatIndex: 0,
        key: 'functionalNumber',
        value: 'b2',
      },
      type: 'UPDATE_CHORD_IN_BAR',
    });
  });

  it('setErrorMessageAction', () => {
    expect(setErrorMessageAction('Error here')).toEqual({
      type: 'SET_ERROR_MESSAGE',
      payload: {
        errorMessage: 'Error here',
      },
    });
  });
});
