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

  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const expense = { description, note, amount, createdAt };
    const ref = await db.ref(`users/${uid}/expenses`).push(expense);
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }));
    return Promise.resolve();
  }
}

export function removeExpense(id) {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export function startRemoveExpense(id) {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.ref(`users/${uid}/expenses/${id}`).remove();
    dispatch(removeExpense(id));
    return Promise.resolve();
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
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.ref(`users/${uid}/expenses/${id}`).update({ ...update });
    dispatch(editExpense(id, update));
    return Promise.resolve();
  }
}

export function setExpenses(expenses) {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export function startSetExpenses() {
  return async (dispatch, uid) => {
    const snapshot = await db.ref(`users/${uid}/expenses`).once('value');
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