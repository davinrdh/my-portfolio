import { Container } from "react-bootstrap";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
