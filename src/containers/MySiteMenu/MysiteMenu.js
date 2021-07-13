import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './MySiteMenu.css';
import { MenuOption, FormInput } from '../../components';
import { headerbase64 } from 'utils/constants';

const MySiteMenu = ({ userInfo }) => {
  const [activeAction, setActiveAction] = useState('');
  const [userStatus, setUserStatus] = useState(userInfo?.status);

  const handleConfirmAssistance = async () => {
    if (userInfo.status === statusEnum[6].value) {
      try {
        setActiveAction('confirm');
        const response = await axios({
          method: 'PATCH',
          url: `/users/${userInfo?.id}`,
          data: {
            user: {
              status: statusEnum[7].value,
            },
          },
        });
        if (response.status === 200) {
          toast.success(' Tu asistencia al torneo ha sido confirmada 🚀 ', {
            position: 'bottom-right',
            toastId: 'handleConfirmAssistance',
          });

          setUserStatus(response?.data?.data?.user?.status);
          setActiveAction('');
        } else {
          toast.error(' Lo sentimos, algo salio mal :( Intente mas tarde ', {
            position: 'bottom-right',
            toastId: 'handleConfirmAssistance',
          });
          setActiveAction('');
        }
      } catch (error) {
        console.error(error);
        setActiveAction('');
      }
    } else {
      toast.info(
        `Demasiado pronto! Podras confirmar tu asistencia cuando tu status sea ${statusEnum[6].label} `,
        {
          position: 'bottom-right',
          toastId: 'handleConfirmAssistance',
        }
      );
    }
  };

  const handleGetAssistanceCertificate = async () => {
    setActiveAction('assistance');
    try {
      const response = await axios({
        method: 'GET',
        url: `/users/${userInfo?.id}/justificante`,
      });
      if (response.status === 200) {
        const base64 = response?.data?.data?.justificante;

        const link = document.createElement('a');
        const concat = `${headerbase64}${base64}`;
        link.download = 'Comprobante';
        link.href = concat;
        link.click();
        toast.success('Su comprobante se ha descargado correctamente.', {
          position: 'bottom-right',
          toastId: 's',
        });
        setActiveAction('');
      } else {
        toast.error(' Lo sentimos, algo salio mal :( Intente mas tarde ', {
          position: 'bottom-right',
          toastId: 'handleGetAssistanceCertificate',
        });
        setActiveAction('');
      }
    } catch (error) {
      console.error(error);
      setActiveAction('');
    }
  };

  const handleGetCertificate = () => {
    console.log('confirmando asistencia');
  };

  const handleGoToTabbieCat = () => {
    //history.push('https://www.postman.com/downloads/');
  };

  const statusEnum = {
    0: { label: 'Expulsado', value: 0 },
    1: {
      label: 'En lista de espera',
      value: 1,
    },
    2: {
      label: 'Equipo incompleto',
      value: 2,
    },
    3: {
      label: 'Falta cumplir con paridad de género',
      value: 3,
    },
    4: {
      label: 'Faltan documentos',
      value: 4,
    },
    5: {
      label: 'Equipo Asignado. Falta confirmación',
      value: 5,
    },
    6: {
      label: 'Equipo-pre inscrito',
      value: 6,
    },
    7: {
      label: 'Equipo registrado',
      value: 7,
    },
  };

  return (
    <div className="my-site-menu">
      <h2 className="info-title">Mis acciones</h2>
      {userInfo?.status !== statusEnum[7].value ? (
        <MenuOption
          label="Confirmar mi asistencia"
          onClick={handleConfirmAssistance}
          loading={activeAction === 'confirm'}
        />
      ) : null}

      <MenuOption
        label="Obtener mi comprobante"
        onClick={handleGetAssistanceCertificate}
        loading={activeAction === 'assistance'}
      />
      <MenuOption label="Obtener  mi diploma" disabled />
      <MenuOption disabled label="Ir a mi tabbiecat" onClick={handleGoToTabbieCat} />
      <MenuOption
        label="Contactar a mi coach"
        disbaled={!userInfo?.coachNumber}
        href={
          userInfo?.coachNumber
            ? `https://wa.me/${userInfo?.coachNumber.replace(/\s/g, '')}`
            : undefined
        }
      />

      <h2 className="info-title">Mi informacion</h2>
      <FormInput
        disbaled
        value={statusEnum[userStatus].label}
        name="status"
        label="Mi status en el torneo"
      />
      <h2 className="info-title">Mi coach</h2>
      <FormInput
        disbaled
        value={userInfo?.coachName ?? 'Tu coach aún no es asignado'}
        name="coach"
        label="Nombre"
      />
      <FormInput disbaled value={userInfo?.coachNumber ?? '--'} name="coach" label="Telefono" />
      <FormInput
        disbaled
        value={userInfo?.coachEmail ? userInfo?.coachEmail : '--'}
        name="coach"
        label="Correo"
      />
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
