import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history, expense;
beforeEach(() => {
  [expense] = expenses;
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />
  );
});

test('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should respond correctly to edit expense', () => {
  let update = expenses[1];
  delete update.id;
  wrapper.find('ExpenseForm').prop('onSubmit')(update);
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, update);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should respond correctly to delete expense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(expense.id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});