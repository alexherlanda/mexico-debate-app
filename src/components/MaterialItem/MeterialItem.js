import React from 'react';
import PropTypes from 'prop-types';
import './MaterialItem.css';

const MaterialItem = (props) => {
  const { title, description, url } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="material-item-container">
      <div className="material-image" />
      <div className="materialItem-content">
        <h2>{title}</h2>
        <div className="material-description">{description}</div>
      </div>
    </a>
  );
};

MaterialItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

MaterialItem.defaultProps = {
  title: 'Nombre del curso',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no',
};

export default MaterialItem;
