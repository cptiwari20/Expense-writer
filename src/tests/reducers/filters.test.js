import filterReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
}

describe('Filters Reducers', () => {
  it('should add text filter', () => {
    const action = {type: 'FILTER_BY_TEXT', text: 'rom'};
    const newState = filterReducer(defaultState, action);
    expect(newState.text).toBe('rom')
  });

  it('should add sort by date', () => {
    const action = {type: 'SORT_BY_DATE'};
    const newState = filterReducer(defaultState, action);
    expect(newState.sortBy).toBe('date')
  });

  it('should add sort by amount', () => {
    const action = {type: 'SORT_BY_AMOUNT'};
    const newState = filterReducer(defaultState, action);
    expect(newState.sortBy).toBe('amount')
  });

  it('should add set by start date', () => {
    const action = {type: 'SET_START_DATE', startDate: 123};
    const newState = filterReducer(defaultState, action);
    expect(newState).toEqual({
      ...defaultState,
      startDate: 123
    });
  });

  it('should add set by end date', () => {
    const action = {type: 'SET_END_DATE', endDate: 123};
    const newState = filterReducer(defaultState, action);
    expect(newState).toEqual({
      ...defaultState,
      endDate: 123
    })
  });

})