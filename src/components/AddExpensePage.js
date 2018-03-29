import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from './../actions/expenses';

function AddExpensePage({dispatch}) {
  return (
    <div>
      <ExpenseForm 
        onSubmit={e => dispatch(addExpense(e))}
      />
    </div>
  );
};


export default connect()(AddExpensePage);