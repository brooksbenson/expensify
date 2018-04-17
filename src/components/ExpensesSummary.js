import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export default ({expensesTotal, expensesCount}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00'); 
  return (
    <div className='page-header'> 
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};