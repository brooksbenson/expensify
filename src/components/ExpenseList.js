import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export function ExpenseList({expenses}) {
  return (
    <div>
      {
        expenses.length === 0 
          ? <p> No expenses </p>
          : expenses.map(e => <ExpenseListItem key={e.id} {...e} />)
      }
    </div>
  );
}

function mapStateToProps({ expenses, filters }) {
  return {expenses: selectExpenses(expenses, filters)};
}
export default connect(mapStateToProps)(ExpenseList);