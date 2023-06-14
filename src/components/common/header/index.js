import React from 'react';
import './index.css';
const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
      ></img>

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
            </div>
            <div>Pune</div>
          </div>
          <i className="fi fi-rr-caret-down absolute-center"></i>

          <div className="location-search-separator">|</div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/564/564631.png"
            alt="profile"
            className="header-profile-image"
          />
          <div className="header-profile-name">Tushar</div>
          <i className="fi fi-rr-caret-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
