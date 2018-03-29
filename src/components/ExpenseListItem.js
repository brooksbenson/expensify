import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';

function ExpenseListItem({ dispatch, createdAt, description, amount, id }) {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => dispatch(removeExpense(id))}>x</button>
    </div>
  )
}

export default connect()(ExpenseListItem);  