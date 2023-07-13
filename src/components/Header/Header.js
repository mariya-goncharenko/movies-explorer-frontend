import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import account from "../../images/acc-button.svg";
import menu from "../../images/menu-button.svg";

import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  const setActive = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>

          <div className="header__button-container">
            <div className="header__button-container-films">
              <NavLink to="/movies" className={setActive}>
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className={setActive}>
                Сохранённые фильмы
              </NavLink>
            </div>
            <Link to="/profile" className="header__account-button">
              <img
                className="header__account-image"
                src={account}
                alt="изображение кнопки аккаунта"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="меню" />
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
