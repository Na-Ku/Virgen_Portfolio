import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Virgen</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://t.me/virgen_w/" className="home__social-icon">
            <i className="uil uil-telegram"></i>
          </a>
          <a href="https://stackoverflow.com/users/19792593/na-ku" className="home__social-icon">
            <i className="bx bxl-stack-overflow"></i>
          </a>
          <a href="https://github.com/Na-Ku/Virgen_Portfolio.github.io" className="home__social-icon">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
