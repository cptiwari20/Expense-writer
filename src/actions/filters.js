// filters actions
export const filterByText = (text) => {
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
export const sortByStartDate = (fromDate) => {
  return {
    type: 'SORT_BY_START_DATE',
    startDate: fromDate
  }
}
export const sortByEndDate = (toDate) => {
  return {
    type: 'SORT_BY_END_DATE',
    endDate: toDate
  }
}

