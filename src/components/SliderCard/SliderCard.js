import React from 'react';
import './SliderCard.css';
import PropTypes from 'prop-types';

function SliderCard(props) {
  const { onClick } = props;
  return (
    <div className="slider-card">
      <a href="" role="button" onClick={onClick}>
        <div className="slider-card-header"></div>
        <div className="slider-card-body">
          <h2>{props?.title}</h2>
          <h3>{props?.description}</h3>
        </div>
      </a>
    </div>
  );
}

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SliderCard.defaultProps = {
  title: 'Titulo',
  description: 'Descripción',
};

export default SliderCard;
