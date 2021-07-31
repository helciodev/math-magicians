import React from 'react';
import PropTypes from 'prop-types';

function Button({ value }) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
