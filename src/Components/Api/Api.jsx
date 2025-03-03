import axios from "axios";

const API_KEY = "e98a07f60a865f1e7c26716371a57318";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });
  return response.data;
};

export const fetchSearchResults = async (query) => {
  if (!query) return;
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  if (!id) return;
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMovieCast = async (id) => {
  if (!id) return;
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data.cast;
};

export const fetchMovieTrailer = async (id) => {
  if (!id) return;
  const response = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
    params: { api_key: API_KEY },
  });
  const trailers = response.data.results.filter((video) => video.type === "Trailer");
  return trailers.length ? trailers[0].key : null;
};
