import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div className="buttons-container">
        <Button btnClick={clickHandler} color="true" name="AC" />
        <Button btnClick={clickHandler} color="true" name="+/-" />
        <Button btnClick={clickHandler} color="true" name="%" />
        <Button btnClick={clickHandler} name="÷" />
      </div>
      <div className="buttons-container">
        <Button btnClick={clickHandler} name="7" color="true" />
        <Button btnClick={clickHandler} name="8" color="true" />
        <Button btnClick={clickHandler} name="9" color="true" />
        <Button btnClick={clickHandler} name="X" />
      </div>
      <div className="buttons-container">
        <Button btnClick={clickHandler} name="4" color="true" />
        <Button btnClick={clickHandler} name="5" color="true" />
        <Button btnClick={clickHandler} name="6" color="true" />
        <Button btnClick={clickHandler} name="-" />
      </div>
      <div className="buttons-container">
        <Button btnClick={clickHandler} name="1" color="true" />
        <Button btnClick={clickHandler} name="2" color="true" />
        <Button btnClick={clickHandler} name="3" color="true" />
        <Button btnClick={clickHandler} name="+" />
      </div>
      <div className="buttons-container">
        <Button btnClick={clickHandler} name="0" wide="true" color="true" />
        <Button btnClick={clickHandler} name="." color="true" />
        <Button btnClick={clickHandler} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
