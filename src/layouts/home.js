import React from "react";
import HomeCarousel from "../components/carousel";
import DateRangePicker from "../components/dateRangePicker";  
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Container className="m-30 p-0">
        <Row>
          <Col sm={12}>
           <DateRangePicker />
            <HomeCarousel />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;

