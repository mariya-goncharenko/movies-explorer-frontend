import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import Movies from "../Movies/Movies"
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <section className="page__content">
        <Switch>
          {/* Главная страница */}
          <Route path="/" exact>
            <Header />
            <Main />
            <Footer />
          </Route>

          {/* Все фильмы */}
          <Route path="/movies" exact>
            <Movies />
          </Route>

          {/* Регистрация */}
          <Route path="/signup">
            <Register />
            <Footer />
          </Route>

          {/* Авторизация */}
          <Route path="/signin">
            <Login />
            <Footer />
          </Route>

          {/* Страница профиля */}
          <Route path="/profile">
            <Profile />
          </Route>

          {/* Страница не найдена. Ошибка 404. */}
          <Route path="/*">
            <NotFound />
          </Route>
          
        </Switch>
      </section>
    </div>
  );
}

export default App;
