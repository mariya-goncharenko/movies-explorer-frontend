import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import "./App.css";

function App() {

  const location = useLocation()

  // Проверяем, нужно ли отображать шапку на странице:
  const showHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }

  // Проверяем, нужно ли отображать подвал на странице:
  const showFooter = () => {
    const { pathname } = location
    return pathname === "/"
  }

  return (
    <div className="page">
      <div className="page__content">
        {showHeader() && <Header />}
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {showFooter() && <Footer />}
      </div>
    </div>
  );
}

export default App;
