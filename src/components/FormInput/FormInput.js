import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = (props) => {
  const { onChange, value, label, placeHolder, name, isPassword, disabled } = props;

  const handleOnChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <label className="input-label" htmlFor={name}>
      {label + ':'}
      <input
        disabled={disabled}
        placeholder={placeHolder}
        value={value}
        onChange={handleOnChange}
        type={isPassword ? 'password' : ''}
      />
    </label>
  );
};

FormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  isPassword: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FormInput;
