import React, { useState } from 'react';
// import {Switch, Route} from 'react-router-dom';
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

      {/*
  I will add a nav element with respective links
  I will wrap everything inside a main element */}
      <div className="calculator-container">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}

export default App;
