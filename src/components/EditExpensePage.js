import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from './../actions/expenses';

export function EditExpensePage({expense, history, editExpense, removeExpense}) {
  return (
    <div>
      <ExpenseForm
        expense={expense} 
        onSubmit={update => {
          editExpense(expense.id, update);
          history.push('/');
        }}
      />
      <button onClick={() => {
        removeExpense(expense.id)
        history.push('/');
      }}>
        remove
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    editExpense(id, update) {
      dispatch(editExpense(id, update));
    },
    removeExpense(id) {
      dispatch(removeExpense(id));
    }
  }
}

function mapStateToProps({expenses}, {match}) {
  const {id} = match.params;
  return {
    expense: expenses.find(e => e.id === id)
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);