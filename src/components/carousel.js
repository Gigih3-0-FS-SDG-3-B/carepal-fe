import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselImageUrls = [
    {
      imageUrl:
        "https://storage.cloud.google.com/carepal/carousel_1.png?authuser=1",
      heading: "Welcome to CarePal!",
      caption: "Always there for you and families",
    },
    {
      imageUrl:
        "https://storage.cloud.google.com/carepal/carousel_2.png?authuser=1",
      heading: "Welcome to CarePal!",
      caption: "Always there for you and families",
    },
    {
      imageUrl:
        "https://storage.cloud.google.com/carepal/carousel_4.png?authuser=1",
      heading: "Welcome to CarePal!",
      caption: "Always there for you and families",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} class="h-50 w-50">
      {carouselImageUrls.map((carousel) => {
        return (
          <Carousel.Item>
            <img
              className="carousel-image"
              src={carousel.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="text-center">
              <div className="p-2 rounded text-black">
                <h3 className="mb-3"><span className="bg-white rounded-xl px-3 py-1">{carousel.heading}</span></h3>
                <p className="mb-2"><span className="bg-white rounded-md px-1 py-1">{carousel.caption}</span></p>
              <Button onClick={() => {navigate("/caregivers")}} className="bg-cyan-500 hover:bg-cyan-600 text-white">Book Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HomeCarousel;
