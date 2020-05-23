import { handleSubmit } from '../src/client/js/formHandler'


test('namecheck call', () => {
  expect(typeof handleSubmit).toBe('function');
})
