import React from 'react';
import PropTypes from 'prop-types';

function Button({
  name, btnClick, color, wide,
}) {
  const notOrange = color ? 'not-orange' : '';
  const isOrange = color ? '' : 'orange';
  const isWide = !wide ? 'buttons all-buttons' : 'button-zero all-buttons';

  return (
    <button
      className={[isOrange, isWide, notOrange].join(' ')}
      onClick={() => btnClick(name)}
      type="button"
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  wide: '',
  color: '',
};

export default Button;
