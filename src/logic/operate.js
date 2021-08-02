import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);

  switch (operation) {
    case '/':
      if (numOne === 0) {
        throw new Error('can not divide by zero');
      } else {
        return numOne / numTwo;
      }
    case '-':
      return numOne - numTwo;
    case '+':
      return numOne + numTwo;
    case '*':
      return numOne * numTwo;
    case '%':
      if (numTwo === 0) {
        throw new Error('can\'t get percentage of zero');
      }
      return numOne % numTwo;

    default:
      return null;
  }
};

export default operate;
