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
            <h2 className="card__title">Киноальманах «100 лет дизайна»</h2>
            <span className="card__time">1ч 3м</span>
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
            <h2 className="card__title">В погоне за Бенкси</h2>
            <span className="card__time">1ч 42м</span>
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
            <h2 className="card__title">Баския: Взрыв реальности</h2>
            <span className="card__time">1ч 21м</span>
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
            <h2 className="card__title">Бег это свобода</h2>
            <span className="card__time">1ч 44м</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>
  {/*
      <li className="card">
        <img className="card__image" alt="Обложка фильма" src={img}/>
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">Книготорговцы</h2>
            <span className="card__time">1ч 37м</span>
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
            <h2 className="card__title">Когда я думаю о Германии ночью</h2>
            <span className="card__time">1ч 56м</span>
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
            <h2 className="card__title">Gimme Danger: История Игги</h2>
            <span className="card__time">1ч 59м</span>
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
            <h2 className="card__title">Соберись перед прыжком</h2>
            <span className="card__time">1ч 10м</span>
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
            <h2 className="card__title">Пи Джей Харви: A dog called money</h2>
            <span className="card__time">1ч 4м</span>
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
            <h2 className="card__title">По волнам: Искусство звука в кино</h2>
            <span className="card__time">1ч 7м</span>
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
  </li> */}
    </ul>
  );
}

export default MoviesCard;
