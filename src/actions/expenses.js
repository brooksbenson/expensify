import uuid from 'uuid';

export function addExpense({ description = '', note = '', amount = 0, createdAt = 0 }) {
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

export function removeExpense(id) {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export function editExpense(id, update) {
  return {
    type: 'EDIT_EXPENSE',
    id,
    update
  }
}