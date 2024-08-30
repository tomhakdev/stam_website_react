import React from "react";
import "./Header.css"; // Assuming you'll move the relevant CSS to this file

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="images/STAM_Logo_Darkened.png" alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#" className="login">Log in</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
