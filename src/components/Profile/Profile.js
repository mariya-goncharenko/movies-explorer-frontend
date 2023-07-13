import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, Мария!</h1>
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
                disabled={!isEditing} // Добавляем disabled, чтобы поле было недоступно при отсутствии редактирования
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
                disabled={!isEditing} // Добавляем disabled, чтобы поле было недоступно при отсутствии редактирования
              />
              <span className="profile__input-error">{}</span>
            </label>

            {isEditing ? (
              <button
                type="button"
                className="profile__save"
                onClick={handleSaveClick}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="profile__edit"
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
                <Link to="/" className="profile__logout">
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
