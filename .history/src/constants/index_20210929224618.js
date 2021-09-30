//HABILITAR PROXY INVERSO PARA CORS INTERCEPTOR
//const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.themoviedb.org/3/";
const popular_movies_get = "movie/popular?";
const popular_series_get = "tv/popular";
const series_get = "tv/"
const serie_search = "/search/tv?";

const movie_search = "search/movie?";
const movies_get = "movie/";
const api_key = "api_key=2c4e30626dc1fcee2a373a9a71cf70f1";


export const popularGet = () => `${base_url}${popular_movies_get}${api_key}&page=1`;
export const moviesGet = movie_id => `${base_url}${movies_get}${movie_id}?${api_key}`;
export const movieSearch = query => `${base_url}${movie_search}${api_key}&query=${query}`;
export const popularSeriesGet = () => `${base_url}${popular_series_get}${api_key}&page=1`;
export const seriesGet = movie_id => `${base_url}${series_get}${movie_id}?${api_key}`;
export const seriesSearch = query => `${base_url}${serie_search}${api_key}&query=${query}`;
