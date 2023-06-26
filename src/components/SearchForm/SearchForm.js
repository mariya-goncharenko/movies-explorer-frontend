import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form id="form">
        <div className="search__form">
          <input
            name="query"
            className="search__input"
            id="search-input"
            type="text"
            placeholder="Фильм"
          ></input>

          <button className="search__button" type="submit">
            Поиск
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
