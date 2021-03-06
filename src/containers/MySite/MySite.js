import React, { useState, useEffect } from 'react';
import { SectionDetail } from '../../components';
import LoginFrom from '../LoginForm';
import MySiteMenu from '../MySiteMenu';
import { connect } from 'react-redux';
import { loginRequest, profileRequest } from 'redux/actions';
import { toast } from 'react-toastify';

import './MySite.css';

function MySite(props) {
  // TODO: remove next lines and add real behavior to log in
  const { loginRequest: requestLogin, user, profileRequest: getProfile } = props;

  const [isLogged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const logIn = (userData) => {
    setIsLoading(true);
    if (requestLogin)
      requestLogin({
        onSuccess: (userName) => {
          setTimeout(() => {
            setLogged(true);
            setIsLoading(false);
            toast.success(`Bienvenido ${userName}`, {
              position: 'bottom-right',
              toastId: 's',
            });
          }, 800);
        },
        onFail: () => {
          toast.error('Lo sentimos no pudimos iniciar sesión,favor de verificar sus datos', {
            position: 'bottom-right',
            toastId: 's',
          });
          setIsLoading(false);
        },
        data: userData,
      });
  };

  useEffect(() => {
    let userLocal = JSON.parse(localStorage.getItem('user'));
    if (userLocal?.id) {
      setLogged(true);
      getProfile({ userId: userLocal?.id });
    }
  }, [getProfile]);

  if (isLogged && typeof user?.data?.email !== 'undefined') {
    return (
      <div className="my-site">
        <SectionDetail
          centerInfo
          title={`Hola ${
            user?.data?.email === 'itzelgaona@lawyer.com'
              ? 'Pricesa de Michoacán'
              : user?.data?.fullname
          },`}
          info={
            user?.data?.email === 'itzelgaona@lawyer.com'
              ? 'Eres una inspiracion hermosa y luminosa, en especial en mi vida. Nunca  olvides lo maravillosa que eres.'
              : 'Esperamos que tengas un gran torneo.'
          }
        />
        <MySiteMenu userInfo={user?.data} />
      </div>
    );
  }
  return (
    <div className="my-site">
      <SectionDetail
        title="Mi torneo"
        info="¡Bienvenidx a México Debate 2021! Este es tu sitio personal del torneo, donde puedes confirmar tu asistencia, imprimir tu comprobante, etc. Para acceder, busca los datos de inicio de sesión que llegaron al correo con el que te registraste en el torneo."
      />

      <LoginFrom onLogIn={logIn} loading={isLoading} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state?.user,
  };
}

export default connect(mapStateToProps, { loginRequest, profileRequest })(MySite);
