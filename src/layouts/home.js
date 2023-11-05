import React from "react";
import HomeCarousel from "../components/carousel";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {

  return (
    <div>
      <h1>Home Page</h1>
      <Container className="m-0 p-0">
        <Row>
          <Col sm={8}>
          <HomeCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
