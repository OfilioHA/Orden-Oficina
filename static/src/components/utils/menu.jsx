import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDroplet, faStore, faCakeCandles, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { logout } from "../../libs/auth";

export function SideBar() {
  const secciones = [
    {
      title: "Home",
      icon: faHouse,
      to: "/home",
    },
    {
      title: "Agua",
      icon: faDroplet,
      to: "/tasks",
    },
    {
      title: "Cumpleaños",
      icon: faCakeCandles,
      to: "/birthdays",
    },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-light"
      style={{ width: "4.5rem", minHeight: "100vh" }}
    >
      <Nav
        className="flex-column nav-flush mb-auto text-center"
        variant="pills"
      >
        {secciones.map(({ icon, to, title }, index) => {
          return (
            <Nav.Item key={index}>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-${title}`}>
                    <strong>{title}</strong>
                  </Tooltip>
                }
              >
                <Nav.Link
                  as={NavLink}
                  to={to}
                  className="py-3 rounded-0 border-bottom"
                >
                  <FontAwesomeIcon icon={icon} />
                </Nav.Link>
              </OverlayTrigger>
            </Nav.Item>
          );
        })}
        <Nav.Item>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-logout`}>
                    <strong>Salir</strong>
                  </Tooltip>
                } 
              >
                <Nav.Link
                  onClick={logout}
                  className="py-3 rounded-0 border-bottom"
                >
                  <FontAwesomeIcon icon={faPowerOff} />
                </Nav.Link>
              </OverlayTrigger>
            </Nav.Item>
      </Nav>
    </div>
  );
}
