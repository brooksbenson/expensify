import uuid from 'uuid';
import db from '../firebase/firebase';
      
export function addExpense(expense) {
  return {
    type: 'ADD_EXPENSE',
    expense 
  };
}

export function startAddExpense(expenseData = {}) {
  const { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = new Date().valueOf() 
  } = expenseData;

  return async (dispatch) => {
    const expense = { description, note, amount, createdAt };
    const ref = await db.ref('expenses').push(expense);
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }));
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