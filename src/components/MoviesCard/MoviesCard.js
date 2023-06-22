import React from "react";
import "./MoviesCard.css";
import img from "../../images/card.jpg";

function MoviesCard() {
  return (
    <ul className="cards__list">
      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button type="button" className="card__delete-button"></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>
    </ul>
  );
}

export default MoviesCard;
