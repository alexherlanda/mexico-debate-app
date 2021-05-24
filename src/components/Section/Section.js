import React from "react";

const Section = ({ title, subtitle, description, children }) => {
  return (
    <section>
      <h2> {title} </h2>
      <h3> {subtitle && subtitle.toUpperCase()} </h3>
      <p> {description} </p>
      {children}
    </section>
  );
};

export default Section;
