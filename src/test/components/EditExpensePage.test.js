import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, expense, startRemoveExpenseArgs, startEditExpenseArgs;
beforeEach(() => {
  expense = expenses[0];
  history = {push: jest.fn()};

  function startEditExpense(id, update) {
    startEditExpenseArgs = { id, update };
    return Promise.resolve();
  }

  function startRemoveExpense(id) {
    startRemoveExpenseArgs = { id };
    return Promise.resolve();
  }

  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expense}
    />
  );
});

test('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should respond correctly to edit expense', () => {
  const update = { description: 'updated' };
  return wrapper.find('ExpenseForm').prop('onSubmit')(update).then(() => {
    expect(startEditExpenseArgs).toEqual({
      id: expense.id, 
      update
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});

test('should respond correctly to delete expense', () => {
  return wrapper.find('button').prop('onClick')().then(() => {
    expect(startRemoveExpenseArgs).toEqual({ id: expense.id });
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});