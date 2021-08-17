import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          Math-Magicians
        </div>
        <div>
          <Link className="links" to="/">Home</Link>
          {' | '}
          <Link className="links" to="/calculator">Calcultor</Link>
          {' | '}
          <Link className="links" to="/quote">Quote</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
