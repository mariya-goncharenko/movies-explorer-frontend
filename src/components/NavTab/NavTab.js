import React from "react";
import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__link">
        <Link to="about" smooth={true} duration={600}>
          О проекте
        </Link>
      </li>
      <li className="nav-tab__link">
        <Link to="techs" smooth={true} duration={600}>
          Технологии
        </Link>
      </li>
      <li className="nav-tab__link">
        <Link to="about-me" smooth={true} duration={600}>
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
