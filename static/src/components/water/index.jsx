import { Row, Col } from "react-bootstrap";
import { WaterList } from "./list";

export const Water = () => {

  return (
    <Row className="justify-content-center">
      <Col md={7}>
          <WaterList />
      </Col>
    </Row>
  );
};
