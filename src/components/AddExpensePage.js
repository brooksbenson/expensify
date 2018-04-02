import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from './../actions/expenses';

export function AddExpensePage({addExpense, history}) {
  return (
    <div>
      <ExpenseForm 
        onSubmit={e => {
          addExpense(e)
          history.push('/')
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addExpense(e) {
      dispatch(addExpense(e));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);