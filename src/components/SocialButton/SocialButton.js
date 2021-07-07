import React from 'react';
import instagram from './images/insta.svg';
import messenger from './images/msn.svg';
import twitter from './images/tw.svg';
import youtube from './images/yt.svg';
import './SocialButton.css';

const SocialButton = ({ socialNetwork, link, alt = 'Icono de red social' }) => {
  const getIcon = (key) => {
    switch (key) {
      case 'instagram':
        return instagram;
      case 'messenger':
        return messenger;
      case 'facebook':
        return null;
      case 'twitter':
        return twitter;
      case 'youtube':
        return youtube;
      default:
        return instagram;
    }
  };
  return (
    <a href={link}>
      <button className="social-button">
        <img src={getIcon(socialNetwork)} alt={alt} height="30px" />
      </button>
    </a>
  );
};

export default SocialButton;
