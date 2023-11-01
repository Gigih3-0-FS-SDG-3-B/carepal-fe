import React from "react";
import UserProfileCard from "../components/caregiverCard";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Container fluid>
        <Row>
          <Col>
            <UserProfileCard />
          </Col>
          <Col>
            <UserProfileCard />
          </Col>
          <Col>
            <UserProfileCard />
          </Col>
          <Col>
            <UserProfileCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
