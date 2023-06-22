import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  // const menuToggle = () => {
  //   onclick(showMenu)
  // }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Virgen
        </a>

        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#oke" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#oke4" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#oke3" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#oke2" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#oke2" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portofolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#oke2" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
          {/* <div className="nav__close" onClick={() => showMenu(!Toggle)}> */}
          {/* <i className="uil uil-times" onClick={() => showMenu(!Toggle)}></i> */}
          {/* </div> */}
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
