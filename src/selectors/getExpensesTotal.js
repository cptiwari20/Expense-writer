
export default (expenses) => {
  const amounts = [];
  let total = 0;
  if( !expenses || expenses.length === 0){
    return total;
  }
  expenses.map(expense => {
    return amounts.push(expense.amount);
  });

  amounts.reduce((a, b) => {
    return total = a + b;
  });

  return total;
}