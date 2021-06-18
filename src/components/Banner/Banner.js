import React from 'react';
import MD from './img/MXD.svg';
import { Link } from 'react-router-dom';
// import patron from './img/patron.svg';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__column banner__info">
        <Link to="/my-tournament">
          <img
            alt="Mexico Debate Logo"
            loading="lazy"
            src={MD}
            className="banner__logo"
            width="250px"
          />
        </Link>

        <h2>
          TORNEO VIRTUAL
          <br /> MEXICO DEBATE 2021
        </h2>
        <p>
          CONOCE LA
          <b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebate-convocatoria_final.pdf"
            >
              {' '}
              CONVOCATORIA{' '}
            </a>
          </b>
          <br /> TAMBIÉN LA{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://portal.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebate-politica.pdf"
          >
            <b>POLÍTICA DE EQUIDAD</b>
          </a>
        </p>
      </div>
      <div className="banner__column banner__art">
        {/* <img src={patron} alt="banner" height="400px" loading="lazy" />
        <img src={patron} alt="banner" height="400px" loading="lazy" /> */}
      </div>
    </div>
  );
};

export default Banner;
