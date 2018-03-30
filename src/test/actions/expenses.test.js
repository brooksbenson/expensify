import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('removeExpense should setup REMOVE_EXPENSE action object', () => {
  expect(removeExpense('123')).toEqual({
    id: '123',
    type: 'REMOVE_EXPENSE'
  });
});

test('editExpense should setup EDIT_EXPENSE action object', () => {
  expect(editExpense('123', {description: 'car wash'})).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    update: {
      description: 'car wash'
    }
  });
});

test('addExpense should setup ADD_EXPENSE action object with provided values', () => {
  const expenseData = {
    createdAt: 0,
    description: 'car wash',
    note: 'clean car',
    amount: 100
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('addExpense should setup ADD_EXPENSE action object with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      createdAt: expect.any(Number),
      note: '',
      description: '',
      amount: 0
    }
  });
});