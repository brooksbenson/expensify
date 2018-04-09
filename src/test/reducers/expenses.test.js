import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';

test('should setup expenses state with default values', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense to state', () => {
  const expense = { ...expenses[0], note: 'new expense' };
  const action = addExpense(expense);
  const state = expensesReducer(expenses, action);
  expect(state[state.length - 1]).toEqual(expense);
});

test('should remove an expense by id from state', () => {
  const action = removeExpense(expenses[0].id);
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length - 1);
});

test('should not remove an expense when passed invalid id', () => {
  const action = removeExpense('aaa');
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length);
});

test('should edit an expense', () => {
  const { id } = expenses[0];
  const update = { description: 'updated' };
  const action = editExpense(id, update);
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(update.description);
});

test('should not edit an expense when passed invalid id', () => {
  const { id, ...expense } = expenses[0];
  const update = { ...expense, description: 'updated' };
  const action = editExpense('-1', update);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = setExpenses(expenses);
  const state = expensesReducer([], action);
  expect(state).toEqual(expenses);
});