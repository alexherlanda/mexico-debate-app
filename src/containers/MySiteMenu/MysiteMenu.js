import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './MySiteMenu.css';
import { useHistory } from 'react-router';
import { MenuOption, FormInput } from '../../components';

const MySiteMenu = ({ userInfo }) => {
  const history = useHistory();

  const [activeAction, setActiveAction] = useState('');

  const handleConfirmAssistance = async () => {
    setActiveAction('confirm');
    try {
      const response = await axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_API_GATEWAY}users/1 `,
        data: { secretToken: 1 },
      });
      console.log('response', response);
      toast.success(' Tu asistencia al torneo ha sido confirmada 🚀 ', {
        position: 'bottom-right',
        toastId: 'handleConfirmAssistance',
      });
    } catch (error) {
      console.error(error);
      setActiveAction('');
    }
  };

  const handleGetAssistanceCertificate = () => {
    console.log('confirmando asistencia');
  };

  const handleGetCertificate = () => {
    console.log('confirmando asistencia');
  };

  const handleGoToTabbieCat = () => {
    //history.push('https://www.postman.com/downloads/');
  };

  const UserInfo = ({ name, label, value, disabled }) => (
    <>
      <label htmlFor={name}> {label} </label>
      <input name={name} placeholder={label} value={value} disabled={disabled} />
    </>
  );

  return (
    <div className="my-site-menu">
      <h2 className="info-title">Mis acciones</h2>
      <MenuOption
        label="Confirmar mi asistencia"
        onClick={handleConfirmAssistance}
        loading={activeAction === 'confirm'}
      />
      <MenuOption label="Obtener mi comprobante" />
      <MenuOption label="Obtener  mi diploma" disabled />
      <MenuOption label="Ir a mi tabbiecat" onClick={handleGoToTabbieCat} />

      <h2 className="info-title">Mi informacion</h2>
      <FormInput name="status" label="Mi status en el torneo" />
      <FormInput name="coach" label="Mi coach" />
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
