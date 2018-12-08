import {filterByText, setEndDate, setStartDate, sortByAmount, sortByDate} from '../../actions/filters';


describe('Filter ACTIONS', () => {
  it('should return action with type "FILTER_BY_TExT" ', () => {
    const text = 'mm';
    const action = filterByText(text);
    expect(action).toEqual({
      type: 'FILTER_BY_TEXT',
      text
    })
  });
  it('should return action without any text', () => {
    const action = filterByText();
    expect(action).toEqual({
      type: 'FILTER_BY_TEXT',
      text: ""
    })
  })

  it('should return an action with type "SORT_BY_DATE"', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: 'SORT_BY_DATE'
    });
  })

  it('should return an action with type "SORT_BY_AMOUNT"', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
    });
  })

  it('should return an action with type "SET_START_DATE"', () => {
    const fromDate = 15462
    const action = setStartDate(fromDate);
    expect(action).toEqual({
      type: 'SET_START_DATE', startDate: fromDate
    });
  })

  it('should return an action with type "SET_END_DATE"', () => {
    const toDate = 15462
    const action = setEndDate(toDate);
    expect(action).toEqual({
      type: 'SET_END_DATE', endDate: toDate
    });
  })

})