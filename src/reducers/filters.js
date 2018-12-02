// filter reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export default ( state = filterReducerDefaultState, action) =>{
  switch (action.type){
    case 'SORT_BY_TEXT':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE': 
      return {... state, sortBy: 'date'};
    case 'SORT_BY_AMOUNT': 
      return {... state, sortBy: 'amount'};
    case 'SORT_BY_START_DATE': 
      return {... state, startDate: action.startDate};
    case 'SORT_BY_END_DATE': 
      return {... state, endDate: action.endDate};
    default:
      return state;
  }
};