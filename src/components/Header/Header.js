import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import account from "../../images/acc-button.svg";
import menu from "../../images/menu-button.svg";

import Navigation from "../Navigation/Navigation"

function Header() {

  const location = useLocation()

  // Функция для проверки, нужно ли отображать шапку для фильмов:
  const shouldShowSecondHeader = () => {
    const { pathname } = location
    return (
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile"
    )
  }

  //Функция для проверки, нужно ли отображатьосновную шапку:
  const shouldShowFirstHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }

  const [isClicked, setIsClicked] = React.useState(false)

  function handleOpen() {
    setIsClicked(true)
  }

  function handleClose() {
    setIsClicked(false)
  }

  return (
    <>
      {shouldShowFirstHeader() && (
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
      )}
      {shouldShowSecondHeader() && (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>

          <div className="header__button-container">
            <div className="header__button-container-films">
            <NavLink
                to="/movies"
                className="header__button"
            >
              Фильмы
            </NavLink>
            <NavLink
                to="/saved-movies"
                className="header__button"
            >
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


