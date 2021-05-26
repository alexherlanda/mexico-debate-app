import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'components/SliderCard';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slider() {
  return (
    <Carousel responsive={responsive} draggable>
      <Card onClick={() => alert('Dispara una acción 1')} />
      <Card onClick={() => alert('Dispara una acción 2')} />
      <Card onClick={() => alert('Dispara una acción 3')} />
      <Card onClick={() => alert('Dispara una acción 4')} />
      <Card onClick={() => alert('Dispara una acción 5')} />
      <Card onClick={() => alert('Dispara una acción 6')} />
      <Card onClick={() => alert('Dispara una acción 7')} />
      <Card onClick={() => alert('Dispara una acción 8')} />
    </Carousel>
  );
}

export default Slider;
