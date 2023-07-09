import React, { useState, useEffect } from "react";

import "./Movies.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { filterMovies, filterDuration } from "../../utils/filter";
import * as movies from "../../utils/MoviesApi";

function Movies({ loggedIn, handleLikeFilm, onDeleteCard, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);

  const [initialCardsMovies, setInitialCardsMovies] = useState([]);
  const [isShortFilm, setisShortFilm] = useState(false);
  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleUpdateFilteredMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  function handleShortFilmToggle() {
    setisShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (filterDuration(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDuration(initialCardsMovies));
      } else {
        setFilteredMovies(filterDuration(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem("shortMovies", !isShortFilm);
  }

  function onSearchMoviesFilms(query) {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", isShortFilm);

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleUpdateFilteredMovies(movies, query, isShortFilm);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          handleUpdateFilteredMovies(cardsData, query, isShortFilm);
          setisReqError(false);
          console.log(cardsData);
        })
        .catch((err) => {
          setisReqError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  // Получение короткомеражек из localStorage
  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setisShortFilm(true);
    } else {
      setisShortFilm(false);
    }
  }, []);

  // Получение списка фильмов из localStorage
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  // Проверка, были ли найдены фильмы по запросу
  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearchMoviesFilms={onSearchMoviesFilms}
        onFilterMovies={handleShortFilmToggle}
        isShortFilm={isShortFilm}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        isSavedFilms={false}
        isReqError={isReqError}
        isNotFound={isNotFound}
        savedMovies={savedMovies}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  );
}

export default Movies;
