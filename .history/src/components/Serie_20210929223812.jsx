import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Movie.scss";
import { ReactComponent as SVGHeart } from "../assets/static/icons/heart.svg";
import SerieDetail from "./SerieDetail";
import Modal from "./Modal";

const Serie = (props) => {
    const [modal, setModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const { data, favoriteMovies } = props;
    const { id, original_title, overview, popularity, poster_path, title, backdrop_back } = data;

    useEffect(() => {

    },  []);
    const handleCloseModal = () => {
        setModal(false);
    };
    const handleOpenModal = () => {
        setModal(true);
    };

    const handleSetFavorite = () => {

    };

    const handleDeleteFavorite = (itemId) => {

    };

    const isFavorite = () => {

    };

    return (
        <div className="movie">
            <img className="movie__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Movie" />

        </div>
    );
};

// propsTypes
Movie.propTypes = {
    data: propTypes.object,
    // // title: propTypes.string,
    // // overview: propTypes.string,
    // // id: propTypes.number
    //etc etc solo documentacón
};

// native redux funtions

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies,
    };
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
};

export default connect(mapStateToProps, mapDispatchToProps) (Serie);
