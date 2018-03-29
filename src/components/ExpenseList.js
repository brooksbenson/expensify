import React from 'react';
import { connect } from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

function ExpenseList({expenses}) {
  return (
    <div>
      <h2> Expense List </h2>
      <ExpenseListFilters />
      {
        expenses.map(e => <ExpenseListItem key={e.id} {...e} />)
      }
    </div>
  )
}

function mapStateToProps({ expenses, filters }) {
  return {expenses: selectExpenses(expenses, filters)};
}
export default connect(mapStateToProps)(ExpenseList);