import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div>
        <Button onClick={clickHandler} name="AC" />
        <Button onClick={clickHandler} name="+/-" />
        <Button onClick={clickHandler} name="%" />
        <Button onClick={clickHandler} name="÷" />
      </div>
      <div>
        <Button onClick={clickHandler} name="7" />
        <Button onClick={clickHandler} name="8" />
        <Button onClick={clickHandler} name="9" />
        <Button onClick={clickHandler} name="X" />
      </div>
      <div>
        <Button onClick={clickHandler} name="4" />
        <Button onClick={clickHandler} name="5" />
        <Button onClick={clickHandler} name="6" />
        <Button onClick={clickHandler} name="-" />
      </div>
      <div>
        <Button onClick={clickHandler} name="1" />
        <Button onClick={clickHandler} name="2" />
        <Button onClick={clickHandler} name="3" />
        <Button onClick={clickHandler} name="+" />
      </div>
      <div>
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
