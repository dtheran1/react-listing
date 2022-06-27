import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title"> About me </span>
        <img
          className="sidebar-img"
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,
        </p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title"> Categories </span>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Residential</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us on:</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fa-brands fa-instagram"></i>
          <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
          <i className="sidebar-social-icon fa-brands fa-facebook"></i>
          <i className="sidebar-social-icon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
