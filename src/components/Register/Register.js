import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";

function Register() {
  return (
    <main>
      <section>
        <Form
          title="Добро пожаловать!"
          buttonText="Зарегистрироваться"
          question="Уже зарегистрированы?"
          linkText=" Войти"
          link="/signin"
        >
          <label className="form__field">
            Имя
            <input
              name="name"
              className="form__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
              placeholder="Введите ваше имя"
            />
            <span className="form__input-error">{}</span>
          </label>
          <label className="form__field">
            E-mail
            <input
              name="email"
              className="form__input"
              id="email-input"
              type="email"
              required
              placeholder="Введите ваш email"
            />
            <span className="form__input-error">{}</span>
          </label>
          <label className="form__field">
            Пароль
            <input
              name="password"
              className="form__input"
              id="password-input"
              type="password"
              minLength="6"
              required
              placeholder="Введите пароль"
            />
            <span className="form__input-error">{}</span>
          </label>
        </Form>
      </section>
    </main>
  );
}

export default Register;
