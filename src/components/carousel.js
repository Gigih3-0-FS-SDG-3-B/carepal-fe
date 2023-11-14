import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from '@chakra-ui/react';


function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} class="h-50 w-50">
    <Carousel.Item>
      <img
        className="carousel-image"
        src={"https://storage.googleapis.com/caregiver-image/carousel_1.png"}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">Click me</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel-image"
        src={"https://storage.googleapis.com/caregiver-image/carousel_2.png"}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">Book Now!</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel-image"
        src={"https://storage.googleapis.com/caregiver-image/carousel_3.png"}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">Click me</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel-image"
        src={"https://storage.googleapis.com/caregiver-image/carousel_4.png"}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption>
        <h3>Fourth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">Click me</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel-image"
        src={"https://storage.googleapis.com/caregiver-image/carousel_5.png"}
        alt={`Slide ${index + 1}`}
      />
      <Carousel.Caption>
        <h3>Fifth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">Click me</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeCarousel;
