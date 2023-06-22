import React from "react";
import "./AboutMe.css";
import my_photo from "../../images/mari.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студентка</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__subtitle">Мария Гончаренко</h3>
          <p className="about-me__description">Фронтенд-разработчик, 25 лет</p>
          <p className="about-me__text">
            Живу и работаю в Нижнем Новгороде, закончила Радиофизический
            факультет ННГУ им.Лобачевского. Увлекаюсь туризмом, люблю
            путешествовать, живу с 5 замечательными котиками и 3 пёселями.
            Благодаря курсу Веб-разработчик в Яндекс Практикуме, убедилась, что
            мне интересна разработка и я могу создавать не только дизайн. Хочу
            развиваться в этом направлении, постоянно расширяя и углубляя свои
            знания.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/mariya-goncharenko"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={my_photo} alt="Мария Гончаренко"  />
      </div>
    </section>
  );
}

export default AboutMe;
