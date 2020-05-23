import { checkForName } from '../src/client/js/nameChecker'

test('retrun text from name filed in alert', () =>{
  const mock = jest.fn();
  global.alert = jest.fn();
  checkForName(mock);
  expect(global.alert).toHaveBeenCalledTimes(1);
});
