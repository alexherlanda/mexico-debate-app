import React from 'react';
import './TimeZoneSelector.css';

const TimeZoneSelector = ({ onZoneClick, selectedTimeZone }) => {
  const handleOnZoneClick = (event) => {
    const {
      target: { name },
    } = event;
    if (onZoneClick) onZoneClick(name);
  };

  return (
    <div className="time_zone">
      <button
        className={selectedTimeZone === 'gtm1' ? 'selected_zone' : 'zone'}
        name="gtm1"
        onClick={handleOnZoneClick}
      >
        GTM 1
      </button>
      <button
        className={selectedTimeZone === 'gtm2' ? 'selected_zone' : 'zone'}
        name="gtm2"
        onClick={handleOnZoneClick}
      >
        GTM 2
      </button>
      <button
        className={selectedTimeZone === 'gtm3' ? 'selected_zone' : 'zone'}
        name="gtm3"
        onClick={handleOnZoneClick}
      >
        GTM 3
      </button>
      <button
        className={selectedTimeZone === 'gtm4' ? 'selected_zone' : 'zone'}
        name="gtm4"
        onClick={handleOnZoneClick}
      >
        GTM 4
      </button>
    </div>
  );
};

export default TimeZoneSelector;
