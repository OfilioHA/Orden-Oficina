import { Row, Col } from "react-bootstrap";
import { WaterList } from "./list";

export const Water = () => {

  return (
    <Row>
      <Col md={6}>
          <WaterList />
      </Col>
    </Row>
  );
};
