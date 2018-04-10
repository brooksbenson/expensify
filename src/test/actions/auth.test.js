import { login, logout } from '../../actions/auth';

test('should setup LOGIN action', () => {
  const uid = '123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup LOGOUT action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});