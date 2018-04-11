import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from './../actions/expenses';

export function AddExpensePage({startAddExpense, history}) {
  return (
    <div>
      <ExpenseForm 
        onSubmit={e => {
          return startAddExpense(e).then(() => {
            history.push('/')
          });
        }}
      />
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