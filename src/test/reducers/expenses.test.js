import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { addExpense, removeExpense } from '../../actions/expenses';

test('should setup expenses state with default values', () => {
  let state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense to state', () => {
  let action = addExpense();
  let state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length + 1);
});

test('should remove an expense by id from state', () => {
  let action = removeExpense(expenses[0].id);
  let state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length - 1);
});

test('should not remove an expense when passed an invalid id', () => {
  let action = removeExpense('aaa');
  let state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length);
});