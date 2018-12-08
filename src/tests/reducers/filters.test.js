import filterReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
  text: '',
  sortBy: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

describe('Filters Reducers', () => {
  it('should add text filter', () => {
    const action = {type: 'FILTER_BY_TEXT', text: 'rom'};
    const newState = filterReducer(defaultState, action);
    expect(newState).toEqual({
      ...defaultState,
      text: 'rom'
    })
  });

  it('should add sort by date', () => {
    const action = {type: 'SORT_BY_DATE'};
    const newState = filterReducer(defaultState, action);
    expect(newState).toEqual({
      ...defaultState,
      sortBy: 'date'
    })
  });

  it('should add sort by amount', () => {
    const action = {type: 'SORT_BY_AMOUNT'};
    const newState = filterReducer(defaultState, action);
    expect(newState).toEqual({
      ...defaultState,
      sortBy: 'amount'
    })
  });


})