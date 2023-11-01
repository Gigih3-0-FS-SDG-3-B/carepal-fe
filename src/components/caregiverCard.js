import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserProfileCard = ({ name, imageUrl, onBookClick }) => {
  return (
    <Card>
      <div className="text-center mt-3">
        <img
          src={imageUrl}
          alt={`Profile of ${name}`}
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={onBookClick} variant="primary" block>
          Book
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserProfileCard;
