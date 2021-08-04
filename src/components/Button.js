import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, onClick }) {
  return (
    <button onClick={() => onClick(name)} type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
