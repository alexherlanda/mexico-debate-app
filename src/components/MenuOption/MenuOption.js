import React from 'react';
import './MenuOption.css';

const MenuOption = ({ loading, disabled, label, onClick }) => {
  return (
    <button
      className={disabled || loading ? 'menu-option-disabled' : `menu-option`}
      onClick={disabled || loading ? null : onClick}
      disabled={disabled || loading}
    >
      {label}
      <div className="arrow" />
    </button>
  );
};

export default MenuOption;
