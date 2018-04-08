import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from './../../actions/expenses';
import expenseData from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

test('should add expense to db and store', (done) => {
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

test('should add expense with defaults to db and store', (done) => {
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
})