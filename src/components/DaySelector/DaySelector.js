import React from 'react';
import './DaySelector.css';
import PropTypes from 'prop-types';

const DaySelector = ({ dataSource, onDayClicked }) => {
  const handleOnClick = (selectedDayIndex) => {
    if (onDayClicked) onDayClicked(selectedDayIndex);
  };

  return dataSource?.length > 0 ? (
    <div className="days-selector">
      {dataSource.map((day, index) => (
        <button className="day" key={day.id} onClick={() => handleOnClick(index)}>
          <span> Día {index + 1}</span>
          <span> {day.date} </span>
        </button>
      ))}
    </div>
  ) : null;
};

DaySelector.propTypes = {
  dataSource: PropTypes.array,
  onDayClicked: PropTypes.func,
};

DaySelector.defaultProps = {
  dataSource: [],
  onDayClicked: undefined,
};

export default DaySelector;
