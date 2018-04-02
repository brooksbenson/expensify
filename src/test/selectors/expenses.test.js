import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';

test('should filter expenses using a text filter', () => {
  let filters = {...filters, text: 'good'};
  let selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses.length).toBe(2);
});

test('should filter expenses using start and end dates', () => {
  let filters = {
    ...filters,
    startDate: moment().subtract(3, 'd'),
    endDate: moment().add(3, 'd')
  };
  let selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses.length).toBe(2);
});

test('should sort expenses by amount', () => {
  let e = expenses;
  let expected = [e[3], e[2], e[0], e[1]];
  let filters = {...filters, sortBy: 'amount'}; 
  let sortedExpenses = selectExpenses(expenses, filters);
  expect(sortedExpenses).toEqual(expected);
});

test('should sort expenses by date', () => {
  let e = expenses;
  let expected = [e[0], e[1], e[3], e[2]];
  let filters = {...filters, sortBy: 'date'}; 
  let sortedExpenses = selectExpenses(expenses, filters);
  expect(sortedExpenses).toEqual(expected);
});