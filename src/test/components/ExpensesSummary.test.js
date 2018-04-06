import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with no expenses', () => {
  const expensesTotal = 0;
  const expensesCount = 0;
  const wrapper = shallow(
    <ExpensesSummary 
      expensesTotal={expensesTotal}
      expensesCount={expensesCount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with one expense', () => {
  const expensesTotal = 100;
  const expensesCount = 1;
  const wrapper = shallow(
    <ExpensesSummary 
      expensesTotal={expensesTotal}
      expensesCount={expensesCount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const expensesTotal = 300;
  const expensesCount = 3;
  const wrapper = shallow(
    <ExpensesSummary 
      expensesTotal={expensesTotal}
      expensesCount={expensesCount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});