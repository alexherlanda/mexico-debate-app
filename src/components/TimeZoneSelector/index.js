import React from 'react';

const TimeZoneSelector = ({ onZoneClick }) => {
  const handleOnZoneClick = (event) => {
    if (onZoneClick) onZoneClick(event);
  };

  return (
    <div>
      <button name="gtm1" onClick={handleOnZoneClick}>
        GTM 1
      </button>
      <button name="gtm2" onClick={handleOnZoneClick}>
        GTM 2
      </button>
      <button name="gtm3" onClick={handleOnZoneClick}>
        GTM 3
      </button>
      <button name="gtm4" onClick={handleOnZoneClick}>
        GTM 4
      </button>
    </div>
  );
};

export default TimeZoneSelector;
