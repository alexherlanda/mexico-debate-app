import React from 'react';
import MainInfo from './MainInfo';
import WinnersGrid from './WinnersGrid';
function LastWinners({ souldCombineDataSets }) {
  return (
    <div style={{ display: 'block', width: '100%' }}>
      <MainInfo />
      <WinnersGrid souldCombineDataSets={souldCombineDataSets} />
    </div>
  );
}

export default LastWinners;
