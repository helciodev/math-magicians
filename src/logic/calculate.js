import operate from './operate';

const calculate = (calcData, buttonName) => {
  console.log('I am in calculate now');
  let { next, total, operation } = calcData;
  switch (buttonName) {
    case '+/-':
      if (next) {
        next *= -1;
      } else if (total) {
        total *= -1;
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    // case '%':
    //   operation = '%';
    //   if (total && next) {
    //     total = operate(total, next, operation).toString();
    //   }
    //   break;
    case '.':
      if (!total.includes('.')) {
        total += '.';
      } else if (!next.includes('.')) {
        next += '.';
      }
      break;
    case '+':
      operation = '+';
      break;
    case '=':
      total = operate(parseFloat(total), parseFloat(next), operation).toString();
      next = '';
      operation = '';
      console.log(total);
      break;
    // case '-':
    //   operation = '-';
    //   total = operate(total, next, operation).toString();
    //   break;
    // case '÷':
    //   operation = '÷';
    //   total = operate(total, next, operation).toString();
    //   break;
    // case '*':
    //   operation = '*';
    //   total = operate(total, next, operation).toString();
    //   break;
    // case '=':
    // operation = '=';
    // break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (!operation) {
        total += buttonName;
      } else {
        next += buttonName;
      }
      break;
    default:
      operation = '';
      next = '';
      total = '';
      break;
  }
  console.log(`${parseInt(total, 10)}${operation}${parseInt(next, 10)}`);
  return { total, next, operation };
};

export default calculate;
