import React, { useState } from 'react';
import { SectionDetail } from '../../components';
import LoginFrom from '../LoginForm';
import MySiteMenu from '../MySiteMenu';
import { connect } from 'react-redux';
import { loginRequest } from 'redux/actions';
import './MySite.css';

function MySite(props) {
  // TODO: remove next lines and add real behavior to log in
  const { loginRequest: requestLogin } = props;
  const [isLogged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fakeLogIn = (userData) => {
    setIsLoading(true);
    if (requestLogin)
      requestLogin({
        onSuccess: () => {
          setTimeout(() => {
            setLogged(true);
            setIsLoading(false);
          }, 800);
        },
        data: userData,
      });
  };

  const userInfo = {
    name: 'Alexis',
    status: 'Inscrito',
    coach: 'Mark',
  };

  if (isLogged) {
    return (
      <div className="my-site">
        <SectionDetail
          centerInfo
          title={`Hola ${userInfo?.name}`}
          info="Esperamos que tengas un gran torneo"
        />
        <MySiteMenu userInfo={userInfo} />
      </div>
    );
  }
  return (
    <div className="my-site">
      <SectionDetail
        title="Mi torneo"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo enim, iaculis sit amet
        egestas vitae, viverra pretium nulla. Nulla varius rutrum nibh ac pharetra."
      />

      <LoginFrom onLogIn={fakeLogIn} loading={isLoading} />
    </div>
  );
}

export default connect(null, { loginRequest })(MySite);
