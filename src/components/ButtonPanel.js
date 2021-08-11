import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div>
        <Button btnClick={clickHandler} name="AC" />
        <Button btnClick={clickHandler} name="+/-" />
        <Button btnClick={clickHandler} name="%" />
        <Button btnClick={clickHandler} name="÷" />
      </div>
      <div>
        <Button btnClick={clickHandler} name="7" />
        <Button btnClick={clickHandler} name="8" />
        <Button btnClick={clickHandler} name="9" />
        <Button btnClick={clickHandler} name="X" />
      </div>
      <div>
        <Button btnClick={clickHandler} name="4" />
        <Button btnClick={clickHandler} name="5" />
        <Button btnClick={clickHandler} name="6" />
        <Button btnClick={clickHandler} name="-" />
      </div>
      <div>
        <Button btnClick={clickHandler} name="1" />
        <Button btnClick={clickHandler} name="2" />
        <Button btnClick={clickHandler} name="3" />
        <Button btnClick={clickHandler} name="+" />
      </div>
      <div>
        <Button btnClick={clickHandler} name="0" />
        <Button btnClick={clickHandler} name="." />
        <Button btnClick={clickHandler} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
