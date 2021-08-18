import calculate from '../logic/calculate';

describe('calculate', () => {
  describe('button +', () => {
    const [total, operation, next] = calculate(['1', '', '2'], '+');
    it('returns total, operation and next', () => {
      expect(total).toBe('1');
      expect(next).toEqual('2');
      expect(operation).toEqual('+');
    });
  });

  describe('button +/-', () => {
    let [total] = calculate(['1', '', ''], '+/-');
    it('transforms total into a negative integer', () => {
      expect(total).toBe(-1);
    });
    it('transforms total into a positive integer', () => {
      [total] = calculate(['-1', '', ''], '+/-');
      expect(total).toBe(1);
    });
  });

  describe('button AC', () => {
    const [total, operation, next] = calculate(['1', '', '2'], 'AC');
    it('it return total, operation and next as empty strings', () => {
      expect(total).toEqual('');
      expect(operation).toEqual('');
      expect(next).toEqual('');
    });
  });
});
