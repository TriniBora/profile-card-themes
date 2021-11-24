import React from "react";

export default function Avatar({ avatarUrl }) {
  return (
    <div className="avatar">
      <img src={avatarUrl} alt="avatar" />
    </div>
  );
}
