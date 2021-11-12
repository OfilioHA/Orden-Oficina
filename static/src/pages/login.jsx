import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export function Login() {

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })    
  }

  const sendData = async (event) =>{
    event.preventDefault();
    const {data:{access_token}} = await axios.post('/api/login', data);
    console.log(access_token);
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={5}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" onChange={handleInputChange} name="username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={handleInputChange} name="password"/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
