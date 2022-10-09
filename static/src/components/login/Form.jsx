import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { login } from "../../libs/auth";

export const LoginForm = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
      const {target: {id, value}} = e;
      setUser({...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("/api/login", user);
        const { data } = response;
        login(data);
    }catch (error){
        console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Usuario</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Ingrese el nombre de usuario" 
            onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
            type="password" 
            placeholder="Ingrese la contraseña" 
            onChange={handleChange}
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </div>
    </Form>
  );
};
