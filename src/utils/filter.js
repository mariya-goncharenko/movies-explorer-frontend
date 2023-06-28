import { SHORTS } from './constants';

// Пересчёт длительности фильмов:
export function durationConverter(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч${minutes}м`;
}

// Определение короткометражки:
export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORTS);
}

// Фильтрация по поисковому запросу:
export function filterMovies(movies, query) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}
