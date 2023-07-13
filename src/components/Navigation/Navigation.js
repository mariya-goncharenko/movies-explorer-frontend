import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/acc-button.svg";

function Navigation({ handleClose }) {
  return (
    <div className="navigation">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
          type="button"
        ></button>
        <nav className="navigation__links">
          <NavLink
            exact
            to="/"
            className="navigation__link"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__account-button">
          <p className="navigation__account-title">Аккаунт</p>
          <img src={account} alt="аккаунт" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
