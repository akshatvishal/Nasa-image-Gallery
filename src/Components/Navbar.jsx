import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import nasalogo from "../assets/Nasa.png";
import background from "../assets/Bg.jpg";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.style.background = `url(${background})`;
      document.body.style.backgroundSize = `contain`;
    } else {
      document.body.classList.remove("dark-mode");
      document.body.style.background = "none";
    }
  }, [isDarkMode]);
  

  return (
    <div className="head">
      <div className="logo"></div>

      <ul className="items">
        <li>Home</li>
        <li>APOD</li>
        <li>Neows</li>
      </ul>

      <div className="darkmode">
        <input
          type="checkbox"
          id="check"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label htmlFor="check" className="button"></label>
      </div>
    </div>
  );
}

export default Navbar;
