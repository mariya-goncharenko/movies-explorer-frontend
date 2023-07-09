import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchMoviesFilms, onFilterMovies, isShortFilm }) {
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  function handleChangeInputQuery(e) {
    setQuery(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearchMoviesFilms(query);
    }
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <div className="search">
      <form className="search__form" id="form" onSubmit={handleFormSubmit}>
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          onChange={handleChangeInputQuery}
          value={query || ""}
        ></input>

        <button className="search__button" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox
        onFilterMovies={onFilterMovies}
        isShortFilm={isShortFilm}
      />
      {isQueryError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}

      <div className="search__border-bottom"></div>
    </div>
  );
}

export default SearchForm;
