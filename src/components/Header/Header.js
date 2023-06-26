import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import account from "../../images/acc-button.svg";
import menu from "../../images/menu-button.svg";

import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  // Функция для проверки, нужно ли отображать шапку для фильмов:
  const shouldShowSecondHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  //Функция для проверки, нужно ли отображатьосновную шапку:
  const shouldShowFirstHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {shouldShowFirstHeader() && (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </nav>
        </header>
      )}
      {shouldShowSecondHeader() && (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>

          <nav className="header__button-container">
            <ul className="header__button-container-auth">
              <li className="header__button-container-item">
                <NavLink
                  to="/movies"
                  className="header__button header__button_type_auth"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="header__button-container-item">
                <NavLink
                  to="/saved-movies"
                  className="header__button header__button_type_auth"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <Link
              to="/profile"
              className="header__account-button"
            >
              <p className="header__account-title">Аккаунт</p>
              <img
                className="header__account-image"
                src={account}
                alt="изображение кнопки аккаунта"
              />
            </Link>
            <button
              className="header__menu-button"
              onClick={handleOpen}
              type="button"
            >
              <img src={menu} alt="меню" />
            </button>
          </nav>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
