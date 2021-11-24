import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormatSocialMediaItems({ item }) {
  function handleClick(event) {
    event.preventDefault();
    window.open(item.url);
  }
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`social-media-item ${theme}`}>
      <button onClick={handleClick}>
        <FontAwesomeIcon
          className={`icon ${theme}`}
          icon={["fab", `${item.icon}`]}
        />
      </button>
    </li>
  );
}
