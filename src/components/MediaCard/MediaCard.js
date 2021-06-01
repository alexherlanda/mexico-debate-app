import React from 'react';
import { useHistory } from 'react-router-dom';
import './MediaCard.css';

const MediaCard = ({ title, description, redirectTo }) => {
  const history = useHistory();
  const redirect = () => {
    if (typeof redirectTo === 'string') history.push(redirectTo);
  };

  return (
    <div className="media-card">
      <div
        className="media-card__title"
        onClick={redirect}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {}}
      >
        <span className="media-card__header"> {title} </span>
        <span className="media-card__description"> {description} </span>
      </div>
    </div>
  );
};

export default MediaCard;
