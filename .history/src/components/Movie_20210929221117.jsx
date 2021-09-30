import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Movie.scss";
import { ReactComponent as SVGHeart } from "../assets/static/icons/heart.svg";
import MovieDetail from "./MovieDetail";
import Modal from "./Modal";

const Movie = (props) => {
    const [modal, setModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const { data } = props;

};

export default Movie;
;