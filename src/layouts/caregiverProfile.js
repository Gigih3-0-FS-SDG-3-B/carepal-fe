import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import * as userService from "../services/userService";

const CaregiverProfilePage = () => {
  const { userId } = useParams();
  const [caregiverData, setCaregiverData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await userService.fetchCaregiverData(userId);
        setCaregiverData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userId]);


  const caregiver = {
    first_name: "Felix",
    last_name: "Ivander",
    description: "I am a very experienced caregiver.",
    experience: 10,
    profile_picture_url: "https://via.placeholder.com/250",
    review_rating: 4.5,
    reviews: [
      {
        first_name: "User 1",
        review: "Very good caregiver.",
        review_rating: 4,
        profile_picture_url: "https://via.placeholder.com/50",
      },
      {
        first_name: "User 2",
        review: "Very bad caregiver.",
        review_rating: 1,
        profile_picture_url: "https://via.placeholder.com/50",
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
            src={caregiver.profile_picture_url}
            alt="Caregiver"
            className="mr-4"
          />
          <Box>
            <Heading as="h1">{caregiver.first_name} {caregiver.last_name}</Heading>
            <StarRatings
              rating={caregiver.review_rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
              starSpacing="2px"
            />
          </Box>
        </Flex>
        <Heading as="h3" className="text-blue-500 font-bold">
          About Me
        </Heading>
        <hr />
        <Text fontSize="md" className="text-gray-600">
          {caregiver.description}
        </Text>
        <Text fontSize="md" className="text-gray-500 mb-4">
          {caregiver.experience} years of experience
        </Text>
        <Heading as="h3" className="text-blue-500 font-bold">
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
                  src={review.profile_picture_url}
                  alt={review.first_name}
                  className="mb-2"
                />
                <StarRatings
                  rating={review.review_rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="2px"
                  className="mb-2"
                />
                <Text className="text-sm">{review.review}</Text>
                <Text className="text-sm font-bold">{review.first_name}</Text>
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
