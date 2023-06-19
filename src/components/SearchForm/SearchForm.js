import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm() {

  return (
    <section className="search">
      <form className="search__form" id="form" >
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
        ></input>

        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
      <span className="search__form-error">Нужно ввести ключевое слово</span>
    </section>
  );
}

export default SearchForm;
