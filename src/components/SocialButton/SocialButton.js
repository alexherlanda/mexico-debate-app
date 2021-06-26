import React from "react";
import instagram from "./images/instagram.png";
import messenger from "./images/messenger.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import "./SocialButton.css";

const SocialButton = ({ socialNetwork, link, alt = "Icono de red social" }) => {
  const getIcon = (key) => {
    switch (key) {
      case "instagram":
        return instagram;
      case "messenger":
        return messenger;
      case "facebook":
        return null;
      case "twitter":
        return twitter;
      case "youtube":
        return youtube;
      default:
        return instagram;
    }
  };
  return (
    <a href={link}>
      <button className="social-button">
        <img src={getIcon(socialNetwork)} alt={alt} />
      </button>
    </a>
  );
};

export default SocialButton;
