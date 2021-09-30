import React, { useState, useEffect } from "react";
import axios from "axios";
import { popularGet, movieSearch } from "../constants";
import "../assets/styles/components/MovieList.scss";
import Movie from "./Movie";
import Error from "./Error";
import Loader from "./Loader";

const SerieList = () => {
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getSeries() {
    try {
      const response = await axios.get(popularGet());
        const result = response.data.results;
      setSeries(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div className="movieList">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        series.map((serie) => <Serie key={serie.id} data={serie} />)
      )}
    </div>
  );
};

export default SerieList;
