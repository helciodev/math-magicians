import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const arr = [total, operation, next];

  function handleClick(buttonName) {
    const [newTotal, newOperation, newNext] = calculate(arr, buttonName);

    setTotal(newTotal);
    setOperation(newOperation);
    setNext(newNext);
  }
  return (
    <div className="calculator-wrap">
      <div>
        <h2>let&apos;s do some math</h2>
      </div>
      <div className="calculator">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
