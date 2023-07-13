import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";
import { EMAIL_PATTERN} from "../../utils/constants";

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function handleFormSubmit(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={handleFormSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__field">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="30"
          required
          placeholder="Ваше имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
        />
        <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="Ваша электронная почта"
          onChange={handleChangeInput}
          pattern={EMAIL_PATTERN}
          value={enteredValues.email || ""}
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__field">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          minLength="6"
          maxLength="12"
          placeholder="Установите пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
