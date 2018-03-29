import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from './../actions/expenses';

function EditExpensePage({expense, dispatch, history}) {
  return (
    <div>
      <ExpenseForm
        expense={expense} 
        onSubmit={update => {
          dispatch(editExpense(expense.id, update));
          history.push('/');
        }}
      />
      <button onClick={() => {
        dispatch(removeExpense(expense.id))
        history.push('/');
      }}>
        remove
      </button>
    </div>
  );
}


function mapStateToProps({expenses}, {match}) {
  const {id} = match.params;
  return {
    expense: expenses.find(e => e.id === id)
  } 
}

export default connect(mapStateToProps)(EditExpensePage);