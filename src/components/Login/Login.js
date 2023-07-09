import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";

// Импорт пользовательского хука:
import useForm from "../../hooks/useForm";

// Импорт паттерна для почты:
import { EMAIL_PATTERN } from "../../utils/constants";

function Login({ onLogin, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function handleFormSubmit(event) {
    event.preventDefault();
    onLogin({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      onSubmit={handleFormSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="Введите E-mail"
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
          placeholder="Введите пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Login;
