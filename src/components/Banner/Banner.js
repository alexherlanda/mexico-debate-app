import React from 'react';
import MD from './img/MXD.svg';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__column banner__info">
        <img alt="Mexico Debate Logo" src={MD} className="banner__logo" width="250px" />
        <h2>
          TORNEO VIRTUAL
          <br /> MEXICO DEBATE 2021
        </h2>
        <p>
          CONOCE LA <b>CONVOCATORIA</b> Y SUS BASES.
          <br /> TAMBIÉN LA <b>POLÍTICA DE EQUIDAD</b>
        </p>
      </div>
      <div className="banner__column banner__art" />
    </div>
  );
};

export default Banner;
