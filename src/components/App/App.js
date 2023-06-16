import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";

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
          {/* Регистрация */}
          <Route path="/signup">
            <Header />
            <Register />
            <Footer />
          </Route>
          {/* Авторизация */}
          <Route path="/signin">
            <Header />
            <Login />
            <Footer />
          </Route>
          
          {/* Главная страница */}
          {/* Главная страница */}
          {/* Главная страница */}
        </Switch>
      </section>
    </div>
  );
}

export default App;
