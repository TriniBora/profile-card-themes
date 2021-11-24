import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import "../assets/css/Card.css";

const user = {
  fullName: "Trinidad Boragini",
  label: "Full Stack Web Developer",
  details:
    "Maths Teacher & Software Engineer Intern at BTS. Passionate by learning.",
  quote: "True perfection has to be imperfect.",
  quoteAuthor: "- Little by little - Oasis -",
  avatarUrl: "trinidadb.png",
};

const socialMediaItems = [
  {
    id: 1,
    url: "https://instagram.com/trinibora",
    icon: "instagram-square",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/trinidad-boragini-55b6351b1/",
    icon: "linkedin",
  },
  {
    id: 3,
    url: "https://github.com/TriniBora",
    icon: "github-square",
  },
];

export default function Card() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <CardHeader
        fullName={user.fullName}
        label={user.label}
        avatarUrl={user.avatarUrl}
      />
      <CardBody
        details={user.details}
        quote={user.quote}
        quoteAuthor={user.quoteAuthor}
        socialMediaItems={socialMediaItems}
      />
    </div>
  );
}
