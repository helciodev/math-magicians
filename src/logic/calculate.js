import operate from './operate';

const calculate = (calcData, buttonName) => {
  console.log('I am in calculate now');
  let { next, total, operation } = calcData;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = null;
      next = null;
      break;
    case '%':
      operation = '%';
      total = operate(total, next, operation).toString();
      break;
    case '.':
      return 0.0;
    case '+':
      operation = '+';
      total = operate(total, next, operation).toString();
      break;
    case '-':
      operation = '-';
      total = operate(total, next, operation).toString();
      break;
    case '÷':
      operation = '/';
      total = operate(total, next, operation).toString();
      break;
    case '*':
      operation = '*';
      total = operate(total, next, operation).toString();
      break;
    case '=':
      operation = '=';
      break;
    case numbers.includes(buttonName):
      next = parseInt(numbers[buttonName], 10);
      break;
    default:
      operation = null;
      next = null;
      total = null;
      break;
  }

  return { total, next, operation };
};

export default calculate;
