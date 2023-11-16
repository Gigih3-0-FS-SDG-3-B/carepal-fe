import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserProfileCard = ({
  caregiverId,
  name,
  subtitle,
  imageUrl,
  backgroundImageUrl,
  description,
  review,
  numberOfReviews,
  city,
  country,
  rates,
  onBookClick,
}) => {
  const formattedRates = rates.toLocaleString();
  const navigate = useNavigate();
  const handleBookClick = (e) => {
    e.stopPropagation();
    onBookClick(caregiverId)
  }

  const handleCardClick = () => {
    navigate(`/caregivers/${caregiverId}`);
  };

  return (
    <Card className="shadow" onClick={handleCardClick}>
      <div className="text-center rounded">
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
          className="rounded"
        >
          <img
            src={imageUrl}
            alt={`Profile of ${name}`}
            className="rounded-circle ml-4 mb-0"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="m-0" />
      <Card.Body className="pt-2">
        <div className="flex h-10">
          <div className="flex-1 w-75">
            <Card.Title className="m-0">{name}</Card.Title>
          </div>
          <div className="flex justify-end w-25 items-end">
            <i class="bi bi-star-fill"></i>
            <Card.Text className="pl-1 m-0">{review}</Card.Text>
            <Card.Text className="pl-1 text-xs align-bottom">
              ({numberOfReviews})
            </Card.Text>
          </div>
        </div>
        <Card.Subtitle className="my-1 text-muted text-sm">{subtitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="flex items-end">
        <div className="w-75">
          <Card.Text className="p-0 m-0 text-xs font-sans font-semibold">
            {city}, {country}
          </Card.Text>
          <div className="flex items-end">
            <Card.Text className="pr-1 m-0 text-sm font-sans font-bold">
              IDR {formattedRates}
            </Card.Text>
            <Card.Text className="p-0 m-0 text-xs font-sans font-light">
              /night
            </Card.Text>
          </div>
        </div>
        <div className="w-25 flex me-auto">
          <Button onClick={handleBookClick} variant="danger" className="ms-auto z-50">
            Book
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

UserProfileCard.defaultProps = {
  name: "Felix",
  subtitle: "Experienced Caregiver",
  imageUrl: "https://imgur.com/l2Zm7I4.png",
  backgroundImageUrl:
    "https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg",
  description:
    "Some quick example text to build on the card title and make up the bulk of the cards content.",
  review: 4.5,
  numberOfReviews: 10,
  city: "Jakarta",
  country: "Indonesia",
  rates: 200000,
};

export default UserProfileCard;
