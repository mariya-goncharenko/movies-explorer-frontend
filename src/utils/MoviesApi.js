export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export function getMovies() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}
