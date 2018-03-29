import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';

function ExpenseListItem({ dispatch, createdAt, description, amount, id }) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => dispatch(removeExpense(id))}>
        remove
      </button>
    </div>
  )
}

export default connect()(ExpenseListItem);  