import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

let expenses = [
  {
    createdAt: moment().add(7, 'd').valueOf(),
    description: 'car wash',
    note: 'clean car',
    amount: 1000
  },
  {
    createdAt: moment().add(3, 'd').valueOf(),
    description: 'pizza',
    note: 'good pizza',
    amount: 700
  },
  {
    createdAt: moment().subtract(7, 'd').valueOf(),
    description: 'skateboard',
    note: 'good times',
    amount: 7000
  },
  {
    createdAt: moment().subtract(3, 'd').valueOf(),
    description: 'xbox',
    note: 'new xbox',
    amount: 40000
  }
];

let filters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

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