import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = (props) => {
  const {
    onChange,
    value,
    label,
    placeHolder,
    name
  } = props;

  const handleOnChange = (e) => {
    if (onChange) onChange(e.target.value);
  }

  return (
    <label className="input-label" htmlFor={name}>
      {label}
      <input
        placeholder={placeHolder || name}
        value={value}
        onChange={handleOnChange}
      />
    </label>
  )
}

FormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.string
};

export default FormInput;
