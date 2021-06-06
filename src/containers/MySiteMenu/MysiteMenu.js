import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MySiteMenu.css';

const MySiteMenu = (props) => {
  const { onLogIn } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnLogIn = () => {
    if (onLogIn && typeof onLogIn === 'function') {
      onLogIn({ user: username, password });
    }
  };

  return (
    <div className="my-site-menu">
      <h2 className="info-title">Trámites</h2>
      <button className="goto-button" onClick={handleOnLogIn}>
        Genera un Id
        <div className="arrow" />
      </button>
      <button className="goto-button" onClick={handleOnLogIn}>
        Confirma tu asistencia
        <div className="arrow" />
      </button>
      <h2 className="info-title">Consulta</h2>
      <input
        placeholder="Estatus"
      />
      <input
        placeholder="Tablecat"
      />
      <input
        placeholder="Coach"
      />
    </div>
  )
}

MySiteMenu.PropTypes = {
  onLogIn: PropTypes.func
};

MySiteMenu.defaultProps = {
  onLogIn: null
}

export default MySiteMenu;