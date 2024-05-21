import { Container } from "react-bootstrap";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header sticky-top">
        <Container>
          <div className="d-flex justify-content-between">
            <NavLink to={"/"}>
              <h1 className="brand m-0 fst-italic">
                Davin<span className="yellow">ridha.</span>
              </h1>
            </NavLink>
            <div className="hamburger">
              <i className="bi bi-list"></i>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
