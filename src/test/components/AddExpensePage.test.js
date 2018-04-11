import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addedExpense, history, wrapper;
beforeEach(() => {

  function startAddExpense(expense) {
    addedExpense = expense;
    return Promise.resolve();
  }

  startAddExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  return wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]).then(() => {
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toEqual(expenses[0]);
  });
});