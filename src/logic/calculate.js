/* eslint-disable no-unused-vars */
import operate from './operate';
/* eslint-enable no-unused-vars */

const calculate = (calcData, buttonName) => {
  let { next, total, operation } = calcData;

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
      break;
    case '.':
      operation = '.';
      break;
    case '+':
      operation = '+';
      break;
    case '-':
      operation = '-';
      break;
    case '/':
      operation = '/';
      break;
    case '*':
      operation = '*';
      break;
    case '=':
      operation = '=';
      break;
    case '1':
      next = 1;
      break;
    case '2':
      next = 2;
      break;
    case '3':
      next = 3;
      break;
    case '4':
      next = 4;
      break;
    case '5':
      next = 5;
      break;
    case '6':
      next = 6;
      break;
    case '7':
      next = 7;
      break;
    case '8':
      next = 8;
      break;
    case '9':
      next = 9;
      break;
    case '0':
      next = 0;
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
