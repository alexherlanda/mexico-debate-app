import React from 'react';
import './Footer.css';
import logo1 from './a.svg';
import logo2 from './ine.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <h3>Acerca de</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="footer__column">
        <div className="footer__logos">
          <div className="footer__logo">
            <img alt="logo a" src={logo2} />
          </div>
          <div className="footer__logo">
            <img alt="logo ine" src={logo1} width="90px" style={{ marginTop: '-15px' }} />
          </div>
        </div>
      </div>
      <div className="footer__column">
        <h3>Encuentranos en</h3>
      </div>
    </div>
  );
}

export default Footer;
