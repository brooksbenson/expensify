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

export function startRemoveExpense(id) {
  return async (dispatch) => {
    await db.ref(`expenses/${id}`).remove();
    dispatch(removeExpense(id));
  }
}

export function editExpense(id, update) {
  return {
    type: 'EDIT_EXPENSE',
    id,
    update
  }
}

export function startEditExpense(id, update) {
  return async (dispatch) => {
    await db.ref(`expenses/${id}`).update({ ...update });
    dispatch(editExpense(id, update));
  }
}

export function setExpenses(expenses) {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export function startSetExpenses() {
  return async (dispatch) => {
    const snapshot = await db.ref('expenses').once('value');
    const expenses = [];
    snapshot.forEach(child => {
      expenses.push({
        id: child.key,
        ...child.val()
      });
    });
    dispatch(setExpenses(expenses));
  }
}