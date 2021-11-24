import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function UserInfoHeader({ fullName, label }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h4 className={`subtitle ${theme}`}>{label}</h4>
      <h2 className={`title ${theme}`}>{fullName}</h2>
    </>
  );
}
