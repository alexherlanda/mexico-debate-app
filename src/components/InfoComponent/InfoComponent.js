import React from 'react';
import './InfoComponent.css';

const InfoComponent = (props) => {
  const { title, firstText, secondText, firstIcon, secondIcon } = props;

  return (
    <div className="info-main-container">
      <div className="info-title-label">{title}</div>
      <div className="info-blocks">
        <div className="first-text-container">
          <div className="item-container">
            {firstIcon && <img className="info-icon" src={firstIcon} alt="" />}
            {firstText()}
          </div>
        </div>
        <div className="second-text-container">
          <div className="item-container">
            {secondIcon && <img className="info-second-icon" src={secondIcon} alt="" />}
            {secondText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
