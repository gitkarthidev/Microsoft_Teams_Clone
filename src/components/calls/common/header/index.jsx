import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi fi-rr-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="header-options">
            <i class="fi fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1636712423~hmac=fe525e884b5bc54317f74bac9f3b0fc7"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
