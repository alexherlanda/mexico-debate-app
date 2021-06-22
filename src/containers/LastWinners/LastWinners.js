import React from 'react';
import MainInfo from './MainInfo';
import WinnersGrid from './WinnersGrid';
function LastWinners() {
  return (
    <div style={{ display: 'block', width: '100%' }}>
      <MainInfo />
      <WinnersGrid  />
    </div>
  );
}

export default LastWinners;
