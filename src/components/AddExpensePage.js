import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from './../actions/expenses';

function AddExpensePage({dispatch, history}) {
  return (
    <div>
      <ExpenseForm 
        onSubmit={e => {
          dispatch(addExpense(e));
          history.push('/')
        }}
      />
    </div>
  );
};


export default connect()(AddExpensePage);