import { Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { LayoutBase } from "../layouts/base.jsx";

export function Configuracion() {
  return (
    <LayoutBase>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut delectus ex asperiores autem, voluptas libero fugiat
                    perspiciatis voluptate nihil sit? Nostrum porro laborum hic
                    qui?
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos corrupti ea quae, placeat molestias sint explicabo dolor
                    id, blanditiis, praesentium officia unde architecto esse
                    dolorum?
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </LayoutBase>
  );
}
