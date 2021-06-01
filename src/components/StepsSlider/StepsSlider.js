import React from 'react';
import Carousel from 'react-multi-carousel';
import MediaCard from '../MediaCard';
import steps from '../../data/steps';
import 'react-multi-carousel/lib/styles.css';
import './StepsSlider.css';

const configResponsive = {
  superLargeDesktop: {
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

const StepsSlider = () => {
  return (
    <div className="steps-slider">
      <Carousel
        containerClass="steps-slider__carrousel"
        itemClass="steps-slider__item"
        responsive={configResponsive}
        draggable
      >
        {steps.map(({ step, description, redirectTo }) => (
          <MediaCard
            key={step}
            title={`Paso ${step}`}
            description={description}
            redirectTo={redirectTo}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default StepsSlider;
