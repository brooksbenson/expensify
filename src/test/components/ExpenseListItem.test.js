import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenseData from '../fixtures/expenses';

let [expense] = expenseData;
expense.createdAt = 0;

test('should render ExpenseListItem with expense data', () => {
  let wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});