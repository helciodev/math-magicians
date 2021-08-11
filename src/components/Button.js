import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, btnClick }) {
  return (
    <button onClick={() => btnClick(name)} type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
