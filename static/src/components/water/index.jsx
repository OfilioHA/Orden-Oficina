import { Row, Col } from "react-bootstrap";
import { WaterList } from "./list";
import { TaskForm } from "./form";

export const Water = () => {

  return (
    <Row className="justify-content-between">
      <Col md={7}>
          <WaterList />
      </Col>
      <Col md={5}>
        <TaskForm />
      </Col>
    </Row>
  );
};
