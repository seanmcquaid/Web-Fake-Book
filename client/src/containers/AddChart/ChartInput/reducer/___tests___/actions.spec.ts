import { setValueAction, updateChordInBarAction } from '../actions';

describe('Add Chart Context - Actions', () => {
  it('SET_VALUE', () => {
    expect(setValueAction('numberOfBars', 12)).toEqual({
      type: 'SET_VALUE',
      payload: {
        key: 'numberOfBars',
        value: 12,
      },
    });
  });

  it('UPDATE_CHORD_IN_BAR', () => {
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
});
