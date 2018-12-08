import {filterByText, setEndDate, setStartDate, sortByAmount, sortByDate} from '../../actions/filters';


describe('Filter ACTIONS', () => {
  it('should create an action for FILTER_BY_TExT', () => {
    const text = 'mm';
    const action = filterByText(text);
    expect(action).toEqual({
      type: 'FILTER_BY_TEXT',
      text
    })
  });
  it('should create an action without ant text', () => {
    const action = filterByText();
    expect(action).toEqual({
      type: 'FILTER_BY_TEXT',
      text: ""
    })
  })

})