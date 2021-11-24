import React from "react";
import "../assets/css/Header.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className={`header ${theme}`}>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">
        <FontAwesomeIcon className="icon" icon="sun" />
      </label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">
        <FontAwesomeIcon className="icon" icon="moon" />
      </label>
    </div>
  );
};

export default Header;
