import React, { useState, useEffect } from "react";
import axios from "axios";
import { popularGet, movieSearch } from "../constants";
import "../assets/styles/components/MovieList.scss";
import Movie from "./Movie";
import Error from "./Error";
import Loader from "./Loader";

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getMovies() {
    try {
      const response = await axios.get(popularGet());
        const result = response.data.results;
        console.log(popularGet());
      setMovies(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movieList">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        movies.map((movie) => <Movie key={movie.id} data={movie} />)
      )}
    </div>
  );
};

export default MovieList;
