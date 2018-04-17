import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from './../actions/expenses';

export function AddExpensePage({startAddExpense, history}) {
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'> Add Expense </h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm 
          onSubmit={e => {
            return startAddExpense(e).then(() => {
              history.push('/')
            });
          }}
        />
      </div>
    </div>
);
};

function mapDispatchToProps(dispatch) {
  return {
    startAddExpense(e) {
      return dispatch(startAddExpense(e));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);