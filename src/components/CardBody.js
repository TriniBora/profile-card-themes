import React from "react";
import Description from "./Description";
import SocialMedia from "./SocialMedia";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import "../assets/css/CardBody.css";

export default function CardBody({
  details,
  quote,
  quoteAuthor,
  socialMediaItems,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card-body ${theme}`}>
      <Description details={details} quote={quote} quoteAuthor={quoteAuthor} />
      <SocialMedia socialMediaItems={socialMediaItems} />
    </div>
  );
}
