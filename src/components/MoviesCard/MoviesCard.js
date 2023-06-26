import "./MoviesCard.css";
import img from "../../images/card.jpg";

const MoviesCard = () => {
  const movies = [
    {
      title: "Киноальманах «100 лет дизайна»",
      duration: "1ч 3м",
      img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "В погоне за Бенкси",
      duration: "1ч 42м",
      img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Баския: Взрыв реальности",
      duration: "1ч 21м",
      img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Бег это свобода",
      duration: "1ч 44м",
      img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Книготорговцы",
      duration: "1ч 37м",
      img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <ul className="cards__list">
      {/* Пример карточки с кнопкой удаления: */}
      <li className="card">
        <img className="card__image" alt="Обложка фильма: 33 слова о дизайне " src={img} />
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">1ч 20м</span>
          </div>
          <button type="button" className="card__delete-button"></button>
        </div>
      </li>

      {/* Пример карточек с лайками, данные беру из массива созданного выше: */}
      {movies.map((movie, index) => (
        <li key={index} className="card">
          <img className="card__image" alt={`Обложка фильма: ${movie.title}`} src={movie.img} />
          <div className="card__container">
            <div className="card__title-block">
              <h2 className="card__title">{movie.title}</h2>
              <span className="card__time">{movie.duration}</span>
            </div>
            <button
              type="button"
              className="card__like-button card__like-button_active"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesCard;
