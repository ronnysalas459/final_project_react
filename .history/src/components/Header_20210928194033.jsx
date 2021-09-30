import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions"
import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/images/logo.png";


const Header = () => {

    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
    };
    return (
        <header className="header">
            <figure className="header__logo">
                <img
                    className="header__logo-img"
                    src =  { Logo}
                    alt = "Netflix"
                />
            </figure>

        </header>
    )
};

export default Header
