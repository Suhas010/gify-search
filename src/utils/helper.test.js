import { getCurrencyFormater, getVots } from './helper';

test('should format number', () => {
  expect(getCurrencyFormater(123)).toMatch('₹123.00');
});

test('should get random number', () => {
  expect(getVots(123)).toBe(Number);
});
