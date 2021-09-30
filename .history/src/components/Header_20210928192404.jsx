import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions"
import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/images/logo.png";


const Header = () => {

    const sectionActive = useSelector((state) => state.sectionActive);
};

export default Header
