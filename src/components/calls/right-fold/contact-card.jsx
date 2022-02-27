import React from "react";
import "./contact-card.css";

const ContactCard = ({ item }) => {
  return (
    <div className="contact-card">
      <div className="contact-top">
        <img className="contact-avatar" src={item.avatar} alt="avatar" />
        <div className="contact-info">
          <div className="contact-title">{item.name}</div>
          <div className="contact-subtitle">{item.type}</div>
        </div>
      </div>
      <div className="contact-icons">
        <div className="contact-icon">
          <i class="fi fi-rr-microphone"></i>
        </div>
        <div className="contact-icon">
          <i class="fi fi-rr-play-alt"></i>
        </div>
        <div className="contact-icon">
          <i class="fi fi-rr-menu-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
