import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <h1>
      { result || '0'}
    </h1>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
