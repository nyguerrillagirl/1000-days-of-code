import Calculator from './calculator';

it('should add 1 and 1 and return 2', () => {
  const calculator = new Calculator();
  const result = calculator.add(1, 1);
  expect(result).toBe(2);
});
