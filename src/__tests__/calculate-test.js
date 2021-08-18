import calculate from '../logic/calculate';

describe('calculate', () => {
  describe('button +', () => {
    const [total, operation, next] = calculate([1, '', 2], '+');
    it('sums total and next', () => {
      expect(total).toBe(1);
      expect(next).toEqual(2);
      expect(operation).toEqual('+');
    });
  });

  describe('button +/-', () => {
    let [total] = calculate([1, '', ''], '+/-');
    it('transforms total into a negative integer', () => {
      expect(total).toBe(-1);
    });
    it('transforms total into a positive integer', () => {
      [total] = calculate([-1, '', ''], '+/-');
      expect(total).toBe(1);
    });
  });
});
