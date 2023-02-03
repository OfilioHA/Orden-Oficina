import { Container, Row, Col, Card } from "react-bootstrap";
import { RegisterForm } from "./form";

export function Register() {
  return (
    <div>
      <Container fluid>
        <Row className="h-100 align-items-center justify-content-center py-5">
          <Col md={5}>
            <Card>
              <Card.Body>
                <article className="text-center mb-4">
                    <Card.Title>Bienvenido al Registro</Card.Title>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ullam! Accusantium sapiente adipisci qui deserunt!</p>
                </article>
                <RegisterForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
