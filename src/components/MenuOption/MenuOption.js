import React from 'react';
import './MenuOption.css';

const MenuOption = ({ loading, disabled, label, onClick, href }) => {
  return href ? (
    <a href={disabled ? undefined : href} className="menu-option-a">
      {label}
      <div className={loading ? 'loader' : 'arrow'} />
    </a>
  ) : (
    <button
      className={disabled || loading ? 'menu-option-disabled' : `menu-option`}
      onClick={disabled || loading ? null : onClick}
      disabled={disabled || loading}
    >
      {label}
      <div className={loading ? 'loader' : 'arrow'} />
    </button>
  );
};

export default MenuOption;
