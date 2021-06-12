import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';
import { FormInput } from '../../components';

const LoginFrom = (props) => {
  const { onLogIn, loading } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnLogIn = (event) => {
    event.preventDefault();

    if (onLogIn) {
      onLogIn({ email: username, password });
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Inicia sesión</h2>
      <form>
        <FormInput
          value={username}
          label="Ingresa tu usuario"
          placeHolder="Usuario"
          onChange={(e) => setUsername(e)}
        />
        <FormInput
          value={password}
          label="Ingresa tu contraseña"
          placeHolder="Contraseña"
          onChange={(e) => setPassword(e)}
          isPassword
        />
        <button className="send-button" onClick={handleOnLogIn} disabled={loading}>
          {loading ? 'Espere por favor...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

LoginFrom.propTypes = {
  onLogIn: PropTypes.func,
};

LoginFrom.defaultProps = {
  onLogIn: null,
};

export default LoginFrom;
