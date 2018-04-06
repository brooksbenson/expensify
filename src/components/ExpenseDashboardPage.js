import React from 'react';
import { connect } from 'react-redux';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import { updateFilters } from '../actions/filters';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseDashboardPage = ({expenses, expensesCount, expensesTotal, filters, updateFilters}) => (
  <div>
    <ExpensesSummary expensesTotal={expensesTotal} expensesCount={expensesCount} />
    <ExpenseListFilters {...filters} updateFilters={updateFilters} />
    <ExpenseList expenses={expenses} />
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  const selectedExpenses = selectExpenses(expenses, filters);
  return {
    expenses: selectedExpenses,
    expensesTotal: selectExpensesTotal(selectedExpenses),
    expensesCount: selectedExpenses.length,
    filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilters(update) {
    dispatch(updateFilters(update));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDashboardPage);