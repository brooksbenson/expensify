export default (expenses) => {
  return expenses.reduce((sum, e) => {
    return sum + e.amount;
  }, 0)
};