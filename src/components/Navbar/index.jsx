import React from "react";
import "./navbar.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__content">
        <h2>Where in the world?</h2>

        {/* DarkMode */}
        <div className="darkmode">
          <span><DarkModeIcon color="white"/></span>  
          <span className="darkText">Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
