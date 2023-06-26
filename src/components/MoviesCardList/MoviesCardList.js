import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
//import Preloader from "../Preloader/Preloader";
//import SearchError from "../SearchError/SearchError";

function MoviesCardList() {
  return (
    <section className="cards">
      {/*<Preloader />*/}

      {/*<SearchError errorText={"Ничего не найдено"} />*/}

      {/*<SearchError
        errorText={
          "Во время запроса произошла ошибка.Подождите немного и попробуйте ещё раз"
        }
      />*/}
      
      <MoviesCard />

    
      <div className="cards__button-container">
        <button className="cards__button" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
