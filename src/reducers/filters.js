import moment from 'moment';

const filtersDefaultState = { 
  text: '', 
  sortBy: 'date', 
  startDate: moment().startOf('month'), 
  endDate: moment().endOf('month') 
};

export default function(state = filtersDefaultState, action) {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      return {...state, ...action.update};
    default:
      return state;
  }
}