import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  let wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); 
});

test('should render ExpenseForm with expense data', () => {
  let wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => { 
  let wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {preventDefault(){}});
  expect(wrapper.state('error')).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = 'new description';
  wrapper.find('input').at(0).simulate('change', {target: {value}});
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = 'new note';
  wrapper.find('textarea').simulate('change', {target: {value}});
  expect(wrapper.state('note')).toBe(value);
});

test('should not set amount with invalid input', () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = '10.122';
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toBe('');
});

test('should set amount with valid input', () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = '10.12';
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  let onSubmitSpy = jest.fn(), [expense] = expenses;
  let wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expense}/>);
  wrapper.find('form').simulate('submit', {preventDefault() {}});
  expect(wrapper.state('error')).toBeFalsy();
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expense.description,
    note: expense.note,
    createdAt: expense.createdAt,
    amount: expense.amount
  });
});

test('should set new date on date change', () => {
  let now = moment();
  let wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus on focus change', () => {
  let focused = true;
  let wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calFocused')).toBeTruthy();
});