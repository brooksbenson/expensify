import React from 'react';
import ExpenseListItem from './ExpenseListItem';

export default ({expenses}) => (
  <div>
    {
      expenses.length === 0 
        ? <p> No expenses </p>
        : expenses.map(e => <ExpenseListItem key={e.id} {...e} />)
    }
  </div>
);