import React from 'react';
import PropTypes from 'prop-types';

function Display({ result, next, operation }) {
  return (
    <h1 className="display">
      { result || '0'}
      {' '}
      { operation }
      {' '}
      { next }
    </h1>
  );
}

Display.defaultProps = {
  result: '0',
  next: '',
  operation: '',
};

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
