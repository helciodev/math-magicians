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

  describe('button = when operation equals +', () => {
    const [total] = calculate(['1', '+', '2'], '=');
    it('total to be equal to 3', () => {
      expect(total).toEqual('3');
    });
  });

  describe('button = when operation equals -', () => {
    const [total] = calculate(['12', '-', '2'], '=');
    it('total to be equal to 10', () => {
      expect(total).toEqual('10');
    });
  });

  describe('button = when operation equals X', () => {
    const [total] = calculate(['12', 'X', '2'], '=');
    it('total to be equal to 24', () => {
      expect(total).toEqual('24');
    });
  });

  describe('button = when operation equals ÷', () => {
    const [total] = calculate(['12', '÷', '2'], '=');
    it('total to be equal to 6', () => {
      expect(total).toEqual('6');
    });
  });

  describe('button = when operation equals %', () => {
    const [total] = calculate(['2', '%', '12'], '=');
    it('total to be equal to 0.24', () => {
      expect(total).toEqual('0.24');
    });
  });

  describe('button . ', () => {
    const [total] = calculate(['2', '', ''], '.');
    it('total to be equal to 2.', () => {
      expect(total).toEqual('2.');
    });
  });

  describe('button . ', () => {
    const [total, operation, next] = calculate(['2', '+', '2'], '.');
    it('next to be equal to 2.', () => {
      expect(total).toEqual('2');
      expect(operation).toEqual('+');
      expect(next).toEqual('2.');
    });
  });
});
