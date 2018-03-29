const filtersDefaultState = { text: '', sortBy: 'date', startDate: null, endDate: null };
export default function(state = filtersDefaultState, action) {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      return {...state, ...action.update};
    default:
      return state;
  }
}