import React from "react";
import FormatSocialMediaItems from "./FormatSocialMediaItems";

export default function SocialMedia({ socialMediaItems }) {
  return (
    <ul className="social-media">
      {socialMediaItems.map((item) => (
        <FormatSocialMediaItems key={item.id} item={item} />
      ))}
    </ul>
  );
}
