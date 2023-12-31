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
  Spinner,
} from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import BookingModal from "../components/bookingModal";
import StarRatings from "react-star-ratings";
import * as userService from "../services/userService";
import * as reviewService from "../services/reviewService";

const CaregiverProfilePage = () => {
  const { caregiverId } = useParams();
  const [caregiverDetail, setCaregiverDetail] = useState({});
  const [reviewsArray, setReviewsArray] = useState([]);
  const [avgReviewRating, setAvgReviewRating] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const caregiverDetail = await userService.fetchCaregiverData(
          caregiverId
        );
        setCaregiverDetail(caregiverDetail);
        const reviews = await reviewService.fetchReviews(caregiverId);
        setReviewsArray(reviews?.reviews);
        setAvgReviewRating(reviews?.averageRating);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [caregiverId]);

  return (
    <Flex direction="column" className="space-y-4 mx-auto max-w">
      <Box className="shadow-lg rounded-lg p-4 bg-white">
        <Flex direction="row" alignItems="center" className="mb-4">
          <Image
            borderRadius="full"
            boxSize="250px"
            src={caregiverDetail?.profile_picture_url}
            alt="Caregiver"
            className="mr-4"
          />
          <Box>
            <Heading as="h1">
              {caregiverDetail?.first_name} {caregiverDetail?.last_name}
            </Heading>
            <StarRatings
              rating={avgReviewRating ? avgReviewRating : 0}
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
          {caregiverDetail?.description === null
            ? "No description"
            : caregiverDetail?.description}
        </Text>
        <Text fontSize="md" className="text-gray-500 mb-4">
          {caregiverDetail?.year_experience} years of experience
        </Text>
        <Heading as="h3" className="text-blue-500 font-bold">
          Reviews
        </Heading>
        <hr />
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner size="xl" />
          </div>
        ) : reviewsArray.length > 0 ? (
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
            {reviewsArray.map((review, index) => (
              <Carousel.Item key={index}>
                <Flex
                  direction="column"
                  alignItems="center"
                  className="text-center"
                >
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={review?.user_profile_picture_url}
                    alt={review?.user_first_name}
                    className="mb-2"
                  />
                  <StarRatings
                    rating={review?.review_rating ? review.review_rating : 0}
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
        ) : (
          <Text>No reviews available</Text>
        )}
        <Flex className="full-w">
          <Button colorScheme="blue" className="ms-auto" onClick={onOpen}>
            Book
          </Button>
        </Flex>
      </Box>
      <BookingModal
        caregiverId={caregiverId}
        caregiverName={caregiverDetail?.first_name}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default CaregiverProfilePage;
