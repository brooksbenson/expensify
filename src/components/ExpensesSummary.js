import React from 'react';
import numeral from 'numeral';

export default ({expensesTotal, expensesCount}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00'); 
  return (
    <div> 
      <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
    </div>
  );
};