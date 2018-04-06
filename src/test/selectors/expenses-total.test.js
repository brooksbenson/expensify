import expenseData from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('should return total for one expense', () => {
  const [expense] = expenseData;
  const total = expense.amount;
  expect(selectExpensesTotal([expense])).toBe(total);
});

test('should total for multiple expenses', () => {
  const [expense1, expense2] = expenseData;
  const total = expense1.amount + expense2.amount;
  const expenses = [expense1, expense2];
  expect(selectExpensesTotal(expenses)).toBe(total);
});