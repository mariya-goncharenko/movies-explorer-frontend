import React from "react";

import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h3 className="profile__title">Привет, Мария!</h3>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__field">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="profile__input-error">{}</span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__field">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              required
            />
            <span className="profile__input-error">{}</span>
          </label>
          <button type="button" className="profile__save">
            Редактировать
          </button>
          <button type="button" className="profile__logout">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
