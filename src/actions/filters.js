// filters actions
export const filterByText = (text = '') => {
  return {
    type: 'FILTER_BY_TEXT',
    text
  }
}
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}
export const setStartDate = (fromDate) => {
  return {
    type: 'SET_START_DATE',
    startDate: fromDate
  }
}
export const setEndDate = (toDate) => {
  return {
    type: 'SET_END_DATE',
    endDate: toDate
  }
}

