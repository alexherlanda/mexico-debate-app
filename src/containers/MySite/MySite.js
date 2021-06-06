import React, { useState } from 'react';
import { SectionDetail } from '../../components';
import LoginFrom from '../LoginForm';
import MySiteMenu from '../MySiteMenu';
import './MySite.css';

const MySite = () => {
  // TODO: remove next lines and add real behavior to log in
  const [isLogged, setLogged] = useState(false);
  const fakeLogIn = (userData) => {
    const {user, password} = userData;
    setLogged(true);
    console.log(user, password);
  }

  if (isLogged) {
    return (
      <div className="my-site">
        <SectionDetail
          centerInfo
          title="Bienvenido Usuario"
          info="Esperamos que tengas un gran torneo"
        />
        <MySiteMenu />
      </div>
    )
  }
  return (
    <div className="my-site">
      <SectionDetail
        title="Mi torneo"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo enim, iaculis sit amet
        egestas vitae, viverra pretium nulla. Nulla varius rutrum nibh ac pharetra."
      />
      <LoginFrom />
    </div>
  )
}

export default MySite;