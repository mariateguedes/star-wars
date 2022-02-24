import axios from "axios";

export const getCharactersApi = (url) => {
  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export const getCharactersSearchApi = (search) => {
  return axios
    .get(`https://swapi.dev/api/people/?search=${search}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export const getMovieDetailApi = (url) => {
  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => {
      return err;
    })
}

export const getMoviesApi = () => {
  return axios
    .get('https://swapi.dev/api/films')
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => {
      return err;
    });
}

