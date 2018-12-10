
export default (expenses) => {
  let total = 0;
  if( !expenses || expenses.length === 0){
    return total;
  }
  expenses
  .map(expense => expense.amount )
  .reduce((a, b) => total = a + b, 0 );

  return total;
}