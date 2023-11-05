import { Container, Row, Col } from "react-bootstrap";
import UserProfileCard from "../components/caregiverCard";
import DateRangePicker from "../components/dateRangePicker";

function CaregiverPage() {
  const handleBookClick = () => {
    alert("Booking functionality will be implemented here.");
  };

  return (
    <div>
      <DateRangePicker />
      <Container fluid>
        <Row>
          <Col>
            <UserProfileCard
              name="Felix"
              imageUrl="https://i.imgur.com/R1Ll23s.png"
              onBookClick={handleBookClick}
            />
          </Col>
          <Col>
            <UserProfileCard
              name="Felix"
              imageUrl="https://i.imgur.com/R1Ll23s.png"
              onBookClick={handleBookClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CaregiverPage;
