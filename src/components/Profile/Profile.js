import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Profile.css";
import Header from "../Header/Header";

import useForm from "../hooks/useForm";
import { EMAIL_PATTERN, USERNAME_PATTERN } from "../../utils/constants";

function Profile({ isLoading, signOut, onUpdateUser, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } =
    useForm();

  const [isLastValues, setIsLastValues] = useState(false);

  // Сброс формы при обновлении текущего пользователя
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  // Обработка отправки формы
  function handleFormSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  // Проверка, являются ли текущие значения полей формы последними сохраненными значениями
  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <form
          id="form"
          className="profile__form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label className="profile__field">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Ваше имя"
              onChange={handleChangeInput}
              value={enteredValues.name || ""}
              pattern={USERNAME_PATTERN}
            />
            <span className="profile__input-error">{errors.name}</span>
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
              placeholder="Ваша электронная почта"
              onChange={handleChangeInput}
              pattern={EMAIL_PATTERN}
              value={enteredValues.email || ""}
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastValues
                ? "profile__button-save form__button-save_inactive"
                : "profile__button-save"
            }
          >
            Редактировать
          </button>

          <button type="button" className="profile__logout" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
