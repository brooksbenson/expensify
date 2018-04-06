import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let wrapper, updateFilters;
beforeEach(() => {
  updateFilters = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      updateFilters={updateFilters} 
      {...filters} 
    />
  );
});

test('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with altFilters', () => {
  wrapper.setProps({...altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should respond to text change correctly', () => {
  wrapper.find('input').simulate('change', {
    target: {value: 'test'}
  });
  expect(updateFilters).toHaveBeenLastCalledWith({text: 'test'});
});

test('should respond to sortBy change correctly', () => {
  wrapper.find('select').simulate('change', {
    target: {value: 'amount'}
  });
  expect(updateFilters).toHaveBeenLastCalledWith({sortBy: 'amount'});
});

test('should respond to date range change correctly', () => {
  let dates = {
    startDate: moment(0),
    endDate: moment(2)
  };
  wrapper.find('DateRangePicker').prop('onDatesChange')(dates);
  expect(updateFilters).toHaveBeenLastCalledWith(dates);
});

test('should respond calendar focus change correctly', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
  expect(wrapper.state('calFocused')).toBe('startDate');
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('calFocused')).toBe('endDate');
});