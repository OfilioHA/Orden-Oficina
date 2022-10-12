import { Row, Col } from "react-bootstrap";
import { TaskList } from "./list";
import { TaskForm } from "./form";

export const Task = () => {

  return (
    <Row className="justify-content-between">
      <Col md={7}>
          <TaskList />
      </Col>
      <Col md={5}>
        <TaskForm />
      </Col>
    </Row>
  );
};
