import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  useDisclosure,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import BookingModal from "../components/bookingModal";
import StarRatings from "react-star-ratings";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CaregiverProfilePage = ({ caregiver }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  caregiver = {
    name: "Felix",
    description: "I am a very experienced caregiver.",
    experience: 10,
    profileImage: "https://via.placeholder.com/250",
    rating: 4.5,
    reviews: [
      {
        userName: "User 1",
        content: "Very good caregiver.",
        rating: 4,
        userImage: "https://via.placeholder.com/50",
      },
      {
        userName: "User 2",
        content: "Very bad caregiver.",
        rating: 1,
        userImage: "https://via.placeholder.com/50",
      },
    ],
  };

  return (
    <Flex direction="column" className="space-y-4 mx-auto max-w">
      <Box className="shadow-lg rounded-lg p-4 bg-white">
        <Flex direction="row" alignItems="center" className="mb-4">
          <Image
            borderRadius="full"
            boxSize="250px"
            src={caregiver.profileImage}
            alt="Caregiver"
            className="mr-4"
          />
          <Box>
            <Heading as="h1">
              {caregiver.name}
            </Heading>
            <StarRatings
              rating={caregiver.rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
              starSpacing="2px"
            />
          </Box>
        </Flex>
        <Heading as='h3' className="text-blue-500 font-bold">
          About Me
        </Heading>
        <hr />
        <Text fontSize="md" className="text-gray-600">
          {caregiver.description}
        </Text>
        <Text fontSize="md" className="text-gray-500 mb-4">
          {caregiver.experience} years of experience
        </Text>
        <Heading as='h3' className="text-blue-500 font-bold">
          Reviews
        </Heading>
        <hr />
        <Carousel
          className="w-full"
          indicators={false}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{ filter: "invert(100%)" }}
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{ filter: "invert(100%)" }}
            />
          }
        >
          {caregiver.reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <Flex
                direction="column"
                alignItems="center"
                className="text-center"
              >
                <Image
                  borderRadius="full"
                  boxSize="50px"
                  src={review.userImage}
                  alt={review.userName}
                  className="mb-2"
                />
                <StarRatings
                  rating={review.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="2px"
                  className="mb-2"
                />
                <Text className="text-sm">{review.content}</Text>
                <Text className="text-sm font-bold">{review.userName}</Text>
              </Flex>
            </Carousel.Item>
          ))}
        </Carousel>
        <Flex className="full-w">
          <Button colorScheme="blue" className="ms-auto" onClick={onOpen}>
            Book Appointment
          </Button>
        </Flex>
      </Box>
      <BookingModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default CaregiverProfilePage;
