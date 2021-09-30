import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";
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
        <img className="header__logo-img" src={Logo} alt="Netflix" />
      </figure>
      <nav className="header__nav">
        <ul className="header__nav__options">
          <li
            onClick={() => handleSetSection("Movies")}
            className={`header__nav__options-item ${
              sectionActive === "Movies" ? "active" : ""
            }`}
          >
            <Link to="/">Movies</Link>
          </li>
          <li
            onClick={() => handleSetSection("Series")}
            className={`header__nav__options-item ${
              sectionActive === "Series" ? "active" : ""
            }`}
          >
            <Link to="/series">Series</Link>
                  </li>
                  <li
            onClick={() => handleSetSection("Favorites")}
            className={`header__nav__options-item ${
              sectionActive === "Favorites" ? "active" : ""
            }`}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
