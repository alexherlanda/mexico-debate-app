import React from 'react';
import './DaySelector.css';
import PropTypes from 'prop-types';

const DaySelector = ({ dataSource, onDayClicked, selectedDay }) => {
  const handleOnClick = (selectedDayIndex) => {
    if (onDayClicked) onDayClicked(selectedDayIndex);
  };

  return dataSource?.length > 0 ? (
    <>
      <div className="days-selector">
        {dataSource.map((day, index) => (
          <button
            className={index === selectedDay ? 'selected' : 'day'}
            key={day.id}
            onClick={() => handleOnClick(index)}
          >
            <span className="dayLabel"> Día {index + 1}</span>
            <span className="date"> {day.date} </span>
          </button>
        ))}
      </div>
      <div className="bottom-shadow" />
    </>
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
