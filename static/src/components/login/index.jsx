import { Card, Container, Row, Col } from "react-bootstrap";
import { LoginForm } from "./Form";

export const Login = () => {
  return (
    <div>
      <Container fluid>
        <Row
          className="h-100 align-items-center justify-content-center"
        >
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
