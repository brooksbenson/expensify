import React from 'react';
import ExpenseListItem from './ExpenseListItem';

export default ({expenses}) => (
  <div className='content-container'>
    <div>
      <div className='list-header'>
        <div className='show-for-mobile'> Expenses </div>
        <div className='show-for-desktop'> Expense </div>
        <div className='show-for-desktop'> Amount </div>
      </div>
    </div>
    {
      expenses.length === 0 
        ? <p> No expenses </p>
        : expenses.map(e => <ExpenseListItem key={e.id} {...e} />)
    }
  </div>
);