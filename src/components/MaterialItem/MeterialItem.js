import React from 'react';
import PropTypes from 'prop-types';
import './MaterialItem.css';

import defaultBG from './img/patron.svg';

const MaterialItem = (props) => {
  const { title, description, url, type, src } = props;

  const thumbNailStyle = {
    backgroundColor: type === 'text' ? '#b64f88' : '',
    backgroundImage: `url(${src ? src : defaultBG})`,
    backgroundSize: type === 'text' ? 'auto 43%' : 'auto 100%',
    backgroundPosition: 'center',
  };

  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="material-item-container">
      <div className="material-image" style={thumbNailStyle} />
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
