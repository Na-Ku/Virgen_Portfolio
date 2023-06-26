import React from "react";
import Info from "./Info";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="oke" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem aliquid alias ex sequi eius.</p>

          <a download="" href={CV} className="button butto-flex">
            Download CV

            
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
