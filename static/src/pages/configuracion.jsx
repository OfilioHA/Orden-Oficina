import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import { LayoutBase } from "../layouts/base.jsx";

export function Configuracion() {
  return (
    <LayoutBase>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="justify-content-around">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="first">Pagina Uno</Tab.Pane>
              <Tab.Pane eventKey="second">Pagina Dos</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </LayoutBase>
  );
}
