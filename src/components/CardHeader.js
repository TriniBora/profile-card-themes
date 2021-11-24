import React from "react";
import Avatar from "./Avatar";
import UserInfoHeader from "./UserInfoHeader";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import "../assets/css/CardHeader.css";

export default function CardHeader({ fullName, label, avatarUrl }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`class-header ${theme}`}>
      <Avatar avatarUrl={avatarUrl} />
      <UserInfoHeader fullName={fullName} label={label} />
    </div>
  );
}
