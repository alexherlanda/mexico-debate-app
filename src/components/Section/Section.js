import React from 'react';
import './Section.css';

const Section = ({ title, subtitle, description, children, className }) => {
  console.log('className :>> ', className);
  return (
    <section className={`${className} section`}>
      <h2 className="section__title"> {title} </h2>
      {typeof subtitle === 'string' ? (
        <h3 className="section__subtitle"> {subtitle.toUpperCase()} </h3>
      ) : null}

      <p className="section__description"> {description} </p>
      {children}
    </section>
  );
};

export default Section;
