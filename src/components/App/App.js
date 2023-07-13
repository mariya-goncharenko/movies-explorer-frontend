import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

// Импорт стилей:
import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

// Шапка и подвал:
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Основное наполнение страниц:
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

// Импорт поп-ап окон:
import PopUp from "../PopUp/PopUp";
import PopUpUpdate from "../PopUpUpdate/PopUpUpdate";

// Импорт API:
import * as api from "../../utils/MainApi";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isPopUpUpdateOpen, setPopUpUpdateOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const path = location.pathname;

  // Проверяем есть ли токен в локальном хранилище:
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // Комментарий ниже помогает избавиться от предупреждения от eslint.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Регистрация пользователя
  function handleRegister({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        setPopUpOpen(true);
        setIsSuccess(true);
        // Проходим авторизацию, в случае успешной регистрации:
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopUpOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  // Авторизация пользователя:
  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .login(email, password)
      .then((res) => {
        if (res) {
          setPopUpOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("./movies");
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setPopUpOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Если прошла ошибка авторизации, то выходим из приложения:
  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  // Проверяем, является ли ошибка  ошибкой авторизации:
  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  // Получение информации о пользователе, если он успешно авторизовался:
  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      // Получаем сохраненные фильмы пользователя
      api
        .getMovies()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  // Обновление данных пользователя:
  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .updateUserInfo(newUserInfo)
      .then((data) => {
        setPopUpUpdateOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setPopUpUpdateOpen(true);
        setIsUpdate(false);
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Сохранение карточек с фильмом (визуально постановка лайка):
  function handleCardLike(card) {
    api
      .saveCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  // Удаление карточки фильма из сохранённых (визуально снятие лайка или нажатие на крестик):
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  // Логика работы модальных окон:

  // Закрытие:
  function closeAllPopUps() {
    setPopUpOpen(false);
    setPopUpUpdateOpen(false);
  }

  // Закрытие по оверлею:
  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopUps();
    }
  }

  // Закрытие по кнопке ESC:
  const isOpen = isPopUpOpen || isPopUpOpen;
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopUps();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/signup"
              element={
                <Register onRegister={handleRegister} isLoading={isLoading} />
              }
            />

            <Route
              path="/signin"
              element={<Login onLogin={handleLogin} isLoading={isLoading} />}
            />

            <Route
              path="/"
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={Movies}
                  handleLikeFilm={handleCardLike}
                />
              }
            />

            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={SavedMovies}
                />
              }
            />

            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  signOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <PopUp
            isOpen={isPopUpOpen}
            onClose={closeAllPopUps}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
          />

          <PopUpUpdate
            isOpen={isPopUpUpdateOpen}
            onClose={closeAllPopUps}
            isUpdate={isUpdate}
            onCloseOverlay={closeByOverlay}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
