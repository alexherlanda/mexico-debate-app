import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './MySiteMenu.css';
import { useHistory } from 'react-router';

const MySiteMenu = (props) => {
  const history = useHistory();
  const { onLogIn } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnLogIn = () => {
    if (onLogIn && typeof onLogIn === 'function') {
      onLogIn({ user: username, password });
    }
  };

  const handleConfirmAssistance = () => {
    toast.success(' Tu asistencia al torneo ha sido confirmada 🚀 ', {
      position: 'bottom-right',
      toastId: 'handleConfirmAssistance',
    });
  };

  const handleGetAssistanceVCertificate = () => {
    console.log('confirmando asistencia');
  };

  const handleGetCertificate = () => {
    console.log('confirmando asistencia');
  };

  const handleGoToTabbieCat = () => {
    history.push('https://www.postman.com/downloads/');
  };

  const UserAction = ({ label, onClick }) => (
    <button className="goto-button" onClick={onClick}>
      {label}
      <div className="arrow" />
    </button>
  );

  const UserInfo = ({ name, label, value }) => (
    <>
      <label htmlFor={name}> {label} </label>
      <input name={name} placeholder={label} value={value} />
    </>
  );

  return (
    <div className="my-site-menu">
      <h2 className="info-title">Mis acciones</h2>
      <UserAction label="Confirmar mi asistencia" onClick={handleConfirmAssistance} />
      <UserAction label="Obtener mi comprobante de participacion" />
      <UserAction label="Obtener  mi diploma" />

      <UserAction label="Ir a mi tabbiecat" onClick={handleGoToTabbieCat} />

      <h2 className="info-title">Mi informacion</h2>
      <UserInfo name="status" label="Mi status en el torneo" />
    </div>
  );
};

MySiteMenu.PropTypes = {
  onLogIn: PropTypes.func,
};

MySiteMenu.defaultProps = {
  onLogIn: null,
};

export default MySiteMenu;
