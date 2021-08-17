import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
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
    <>
      <div className="calculator-container">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}

export default App;
