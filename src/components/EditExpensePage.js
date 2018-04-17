import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';

export function EditExpensePage({expense, history, startEditExpense, startRemoveExpense}) {
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'> Edit Expense </h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          expense={expense} 
          onSubmit={update => {
            return startEditExpense(expense.id, update).then(() => {
              history.push('/');
            });
          }}
        />
        <button className='button button--secondary' onClick={() => {
          return startRemoveExpense(expense.id).then(() => {
            history.push('/');
          });
        }}>
          Remove Expense
        </button>
      </div>
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