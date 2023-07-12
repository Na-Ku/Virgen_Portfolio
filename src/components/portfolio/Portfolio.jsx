import React from "react";
import "./portfolio.css";
import Web1 from "../../assets/web1.png";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Most recent project</span>

        <div className="portfolio__content">
          <div className="portfolio__info">
            <div className="portfolio__card">
              <img src={Web1} alt="web-app" />

              <h3 className="portfolio__card-title">Web app</h3>
              <span className="portfolio__card-data">MovieList</span>

              <div className="portfolio__link">
                <a href="https://virgensuoth@gmail.com" className="portfolio__button">
                  Go to web app
                  <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                </a>
                <a href="https://github.com/Na-Ku/All-use-react" className="portfolio__button">
                  Web app resource
                  <i className="bx bx-right-arrow-alt portfolioi__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default Portfolio;
