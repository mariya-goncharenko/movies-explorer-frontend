import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"

import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {

  const location = useLocation()

  // Временная функция для проверки, нужно ли отображать Header на текущей странице
  const shouldShowHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }

  // Временная функция для проверки, нужно ли отображать Footer на текущей странице
  const shouldShowFooter = () => {
    const { pathname } = location
    return pathname === "/"
  }

  return (
    <div className="page">
      <div className="page__content">
        {shouldShowHeader() && <Header />}
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {shouldShowFooter() && <Footer />}
      </div>
    </div>
  );
}

export default App;
