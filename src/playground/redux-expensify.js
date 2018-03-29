import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*
  ADD_EXPENSE
  REMOVE_EXPENSE
  EDIT_EXPENSE
*/

function addExpense({ description = '', note = '', amount = 0, createdAt = 0 }) {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}

function removeExpense(id) {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

function editExpense(id, update) {
  return {
    type: 'EDIT_EXPENSE',
    id,
    update
  }
}

const expensesDefaultState = [];
function expensesReducer(state = expensesDefaultState, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id != action.id);
    case 'EDIT_EXPENSE':
      return state.map(e => e.id === action.id ? {...e, ...action.update} : e);
    default:
      return state;
  }
}

/*
  UPDATE_FILTERS
*/

function updateFilters(update) {
  return {
    type: 'UPDATE_FILTERS',
    update
  };
}

const filtersDefaultState = { text: '', sortBy: 'date', startDate: null, endDate: null };
function filtersReducer(state = filtersDefaultState, action) {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      return {...state, ...action.update};
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

function getVisibleExpenses(expenses, filters) {
  const search = new RegExp(text, 'i');
  return expenses.filter(e => {
    const textMatch = search.text(e.description) || search.test(e.note);
    const startDateMatch = startDate ? e.createdAt > startDate : true;
    const endDateMatch = endDate ? e.createdAt < endDate : true;
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
    if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
  });
}