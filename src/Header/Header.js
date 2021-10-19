import React from "react";
import { Carousel } from "react-bootstrap";
import caro1 from "../Images/CarouselImage/img-1.jpg";
import caro2 from "../Images/CarouselImage/img-2.png";
import caro3 from "../Images/CarouselImage/img-3.jpg";

const Header = () => {
  return (
    <div>
      <Carousel className="mx-5 my-5">
        <Carousel.Item>
          <img className="d-block w-100" src={caro1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-4xl text-blue-700">Doctor Service</h3>
            <p className="text-2xl text-blue-500">
              We have an expert Dcotor Team.They Server paitent carefully.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={caro2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-4xl text-blue-700">Ambulance Service</h3>
            <p className="text-2xl text-blue-500">
              For emergency medical purpose we also provide ambulance service
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={caro3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-4xl text-blue-700">Medicine Delivary</h3>
            <p className="text-2xl text-blue-500">
              Medicine is the science and practice of caring for a patient and
              promoting their health.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
