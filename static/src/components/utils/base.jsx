import { Footer } from "./footer.jsx";
import { Container } from "react-bootstrap";
import { SideBar } from "./menu.jsx";
import { Outlet } from "react-router-dom";

export function Layout(props) {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div style={{ width: "100%" }} id="app-container">
          <div className="py-4">
            <Container>
              <Outlet />
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
