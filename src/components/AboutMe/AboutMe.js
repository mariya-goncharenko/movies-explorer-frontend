import React from "react";
import photo from "../../images/mari.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студентка</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__subtitle">Мария Гончаренко</h3>
          <p className="about-me__info">Фронтенд-разработчик, 25 лет</p>
          <p className="about-me__description">
            Живу и работаю в Нижнем Новгороде, закончила Радиофизический
            факультет ННГУ им.Лобачевского. Увлекаюсь туризмом, люблю
            путешествовать, живу с 5 замечательными котиками и 3 пёселями.
            Благодаря курсу Веб-разработчик в Яндекс Практикуме, убедилась, что
            мне интересна разработка и я могу создавать не только дизайн. Хочу
            развиваться в этом направлении, постоянно расширяя и углубляя свои
            знания.
          </p>
          <a
            href="https://github.com/mariya-goncharenko"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
