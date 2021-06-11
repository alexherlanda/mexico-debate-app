import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import Card from 'components/SliderCard';
import "./Slider.css";
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
function Slider({ children, items, onClick, config }) {
  return items.length > 0 ? (
    <Carousel responsive={configResponsive} draggable {...config}>
      {items.map((item) => {
        return (
          <React.Fragment key={item}>
            {React.cloneElement(children, { ...item, onClick })}
          </React.Fragment>
        );
      })}
    </Carousel>
  ) : null;
}
Slider.prototypes = {
  items: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func,
  config: PropTypes.object,
};

Slider.defaultProps = {
  items: [{ title: 'Titulo', description: 'Descripción' }],
  children: <Card />,
  onClick: () => alert('Click en item'),
  config: { responsive: configResponsive },
};
export default Slider;
