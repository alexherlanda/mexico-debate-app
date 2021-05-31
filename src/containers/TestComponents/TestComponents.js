import React from 'react';
import Card from 'components/SliderCard';
import Slider from 'components/Slider';
import WinnerCard from 'components/WinnerCard';

function TestComponents() {
  return (
    <>
      <h2>TestComponent</h2>
      <div style={{ width: '100%', display: 'flex', flexGrow: 4, justifyContent: 'space-around' }}>
        <Card onClick={() => alert('Dispara una acción 1')} />
        <Card onClick={() => alert('Dispara una acción 2')} />
        <Card onClick={() => alert('Dispara una acción 3')} />
        <Card onClick={() => alert('Dispara una acción 4')} />
        <WinnerCard />
      </div>

      <Slider />
    </>
  );
}

export default TestComponents;
