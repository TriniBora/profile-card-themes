import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Description({ details, quote, quoteAuthor }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p className={`card-text ${theme}`}>{details}</p>
      <small className={theme}>
        {quote}
        <br />
        {quoteAuthor}
      </small>
    </div>
  );
}
