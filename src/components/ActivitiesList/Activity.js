import React from 'react';
import PropTypes from 'prop-types';
import './Activity.css';

const Activity = ({ title, description, start, end }) => {
  return (
    <div className="activity">
      <div className="activity__semaphore-container">
        <div className="activity__semaphore" />
      </div>
      <div className="activity__info">
        <span className="time"> {`${start} - ${end} am`}</span>
        <span className="title"> {title && title.toUpperCase()} </span>
        {description ? <span className="description"> {description} </span> : null}
      </div>
    </div>
  );
};

Activity.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};

Activity.defaultProps = {
  title: 'title',
  description: undefined,
  start: 'start',
  end: 'end',
};

export default Activity;
