import React, { useState, useEffect } from 'react'
import axios from "axios";
import { popularGet, movieSearch } from "../constants";
import "../assets/styles/components/MovieList.scss";
import Movie from './Movie';
import Error from './Error';
import Loader from './Loader';


const MovieList = () => {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getMovies() {

    };
}

export default MovieList;