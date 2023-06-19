import React from "react";

import "./MoviesCard.css";

function MoviesCard() {
  return (
    <li className="card">
      <a
        href={"https://example.com/poster.jpg"}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" alt="Описание карточки"/>
      </a>

      <div className="card__container">
        <div className="card__info-container">
          <h2 className="card__text">{}</h2>
          <span className="card__time">{}</span>
        </div>

        <button type="button" className="card__delete-button"></button>

        <button type="button"></button>
      </div>
    </li>
  );
}

export default MoviesCard;
