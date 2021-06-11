import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginFrom = (props) => {
  const { onLogIn } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleOnLogIn = (event) => {
    event.preventDefault()
    
    if (onLogIn) {
      onLogIn({ user: username, password });
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Inicia sesión</h2>
      <form>
        <input
          placeholder="Usuario"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="send-button" onClick={handleOnLogIn}>Log in</button>
      </form>
    </div>
  )
}

LoginFrom.PropTypes = {
  onLogIn: PropTypes.func
};

LoginFrom.defaultProps = {
  onLogIn: null
}

export default LoginFrom;