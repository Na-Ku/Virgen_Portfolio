import React from "react";
// import HeroBanner from "../../Components/HeroBanner";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="../../Aset/Images/hero1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src="../../Aset/Images/hero2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src="../../Aset/Images/hero3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
