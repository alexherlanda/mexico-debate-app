import React from 'react';
import PropTypes from 'prop-types';
import './SectionDetail.css';

const SectionDetail = (props) => {
  const { title, info, centerInfo } = props;
  return (
    <div className="section-detail">
      <h2>{title}</h2>
      <p className={centerInfo ? 'center-info' : ''}>{info}</p>
    </div>
  );
}

SectionDetail.PropTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  centerInfo: PropTypes.bool
}

SectionDetail.defaultProps = {
  title: '',
  info: '',
  centerInfo: false
}

export default SectionDetail;
