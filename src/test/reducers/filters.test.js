import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  let state = filtersReducer(undefined, {type: '@@init'});
  expect(state).toEqual({ 
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month') 
  });
});

test('should update sortBy filter value', () => {
  let update = {sortBy: 'amount'};
  let state = filtersReducer(undefined, {type: 'UPDATE_FILTERS', update}); 
  expect(state).toEqual({ 
    text: '', 
    sortBy: 'amount', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month') 
  });
});

test('should update text filter value', () => {
  let update = {text: 'car'};
  let state = filtersReducer(undefined, {type: 'UPDATE_FILTERS', update}); 
  expect(state).toEqual({ 
    text: 'car', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month') 
  });
});

test('should update start and end date values', () => {
  let update = {
    startDate: moment().startOf('week'), 
    endDate: moment().endOf('week')
  };
  let state = filtersReducer(undefined, {type: 'UPDATE_FILTERS', update}); 
  expect(state).toEqual({ 
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('week'), 
    endDate: moment().endOf('week') 
  });
});