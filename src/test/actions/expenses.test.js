import configureMockStore from 'redux-mock-store';
import { setExpenses, addExpense, editExpense, removeExpense, startAddExpense, startSetExpenses } from './../../actions/expenses';
import expenseData from '../fixtures/expenses';
import db from '../../firebase/firebase';

beforeEach((done) => {
  const expenses = {};
  for (let expense of expenseData) {
    const { id, ...withoutId } = expense;
    expenses[id] = withoutId;
  }
  db.ref('expenses').set(expenses).then(() => done());
});

afterAll(() => {
  db.ref('expenses').remove();
});

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
  const [expense] = expenseData;
  const action = addExpense({...expense});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});

test('should add expense to db and call dispatch', (done) => {
  const dispatch = jest.fn();
  const {id, ...expense } = expenseData[0];

  startAddExpense(expense)(dispatch).then(() => {
    const action = dispatch.mock.calls[0][0];

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expense,
        id: action.expense.id
      }
    });

    db.ref(`expenses/${action.expense.id}`)
      .once('value').then(snapshot => {
        const dbExpense = snapshot.val();
        expect(dbExpense).toEqual({ ...expense });
        done();
      });

  });
});

test('should add expense with defaults to db and call dispatch', (done) => {
  const dispatch = jest.fn();
  const expectedDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: expect.any(Number)
  };

  startAddExpense({})(dispatch).then(() => {
    const action = dispatch.mock.calls[0][0];
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expectedDefaults,
        id: action.expense.id 
      }
    });

    db.ref(`expenses/${action.expense.id}`)
      .once('value').then(snapshot => {
        const dbExpense = snapshot.val();
        expect(dbExpense).toEqual({ ...expectedDefaults })
        done();
      });
  });
});

test('should setup SET_EXPENSES action object', () => {
  const action = setExpenses(expenseData);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses: expenseData
  });
});

test('should read expenses from db and call dispatch', (done) => {
  const dispatch = jest.fn();
  startSetExpenses()(dispatch).then(() => {
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toBe('SET_EXPENSES');
    expect(action.expenses.length).toBe(4);
    done();
  });
});