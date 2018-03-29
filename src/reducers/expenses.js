const expensesDefaultState = [];
export default function(state = expensesDefaultState, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id != action.id);
    case 'EDIT_EXPENSE':
      return state.map(e => e.id === action.id ? {...e, ...action.update} : e);
    default:
      return state;
  }
}