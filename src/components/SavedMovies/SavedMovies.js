import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { filterMovies, filterDuration } from "../../utils/filter";

function SavedMovies({ loggedIn, savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setisShortFilm] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearchMoviesFilms(query) {
    setSearchQuery(query);
  }

  function handleShortFilmToggle() {
    setisShortFilm(!isShortFilm);
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortFilm ? filterDuration(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
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
      />
      <MoviesCardList
        isNotFound={isNotFound}
        isSavedFilms={true}
        cards={filteredMovies}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
