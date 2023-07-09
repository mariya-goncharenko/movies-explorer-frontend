import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/acc-button.svg";

function Navigation({ handleClose }) {
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
        ></button>
        <nav className="navigation__links">
          <NavLink exact to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/movies" onClick={handleClose} className={setActive}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleClose}
            className={setActive}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__account-button"
          onClick={handleClose}
        >
          <img src={account} alt="Кнопка аккаунта" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
