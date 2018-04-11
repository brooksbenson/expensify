import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';

export function EditExpensePage({expense, history, startEditExpense, startRemoveExpense}) {
  return (
    <div>
      <ExpenseForm
        expense={expense} 
        onSubmit={update => {
          return startEditExpense(expense.id, update).then(() => {
            history.push('/');
          });
        }}
      />
      <button onClick={() => {
        return startRemoveExpense(expense.id).then(() => {
          history.push('/');
        });
      }}>
        remove
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    startEditExpense(id, update) {
      return dispatch(startEditExpense(id, update));
    },
    startRemoveExpense(id) {
      return dispatch(startRemoveExpense(id));
    }
  }
}

function mapStateToProps({expenses}, {match}) {
  const {id} = match.params;
  return {
    expense: {...expenses.find(e => e.id === id)}
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);