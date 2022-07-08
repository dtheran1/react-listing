import React from "react";
import "./Header.css";

function Header() {
    return (
      <div className="header-section">
        <div className="hero-text">
          <span className="hero-text-title">Listings</span>
          <span className="hero-text-subtitle">Listing Application</span>
        </div>
        <img className="hero-img" src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
    );
}

export default Header;
