import { updateFilters } from '../../actions/filters';

test('should setup an UPDATE_FILTERS action object', () => {
  let action = updateFilters({description: 'car wash'});
  expect(action).toEqual({
    type: 'UPDATE_FILTERS',
    update: {
      description: 'car wash'
    }
  });
});