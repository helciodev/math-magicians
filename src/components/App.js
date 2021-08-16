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
      <Display result={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       total: '',
//       next: '',
//       operation: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     const { total, next, operation } = calculate(this.state, buttonName);
//     this.setState({
//       total,
//       next,
//       operation,
//     });
//   }

//   render() {
//     const { total, next, operation } = this.state;
//     return (
//       <>
//         <Display result={total} next={next} operation={operation} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }

export default App;
