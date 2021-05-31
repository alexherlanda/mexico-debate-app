import React from 'react';
import PropTypes from 'prop-types';
import './WinnerCard.css';
import winner from './img/winner.png';

function WinnerCard({ name, from }) {
  return (
    <div className="winner-card">
      <div className="winner-photo" style={{ backgroundImage: `url(${winner})` }}></div>
      <div className="winner-description">
        <div className="winner-description-content">
          <h2>{name}</h2>
          <h3>{from}</h3>
        </div>
      </div>
    </div>
  );
}

export default WinnerCard;

WinnerCard.propTypes = {
  name: PropTypes.string,
  from: PropTypes.string,
};

WinnerCard.defaultProps = {
  name: 'Son Goku',
  from: 'Dragon Ball',
};
