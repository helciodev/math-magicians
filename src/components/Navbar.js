import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calcultor</Link>
      <Link to="/quote">Quote</Link>
    </>
  );
}

export default Navbar;
