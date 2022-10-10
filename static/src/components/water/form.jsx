import { Card, Form, Button } from "react-bootstrap";

export const TaskForm = () => {

    const textTitle = 'Agregar nueva tarea';

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {textTitle}
                </Card.Title>
                <Form>
                    <Form.Group className="my-3">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                    <Button type="submit">
                        Agregar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}