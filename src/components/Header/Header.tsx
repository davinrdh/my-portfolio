import { Container } from "react-bootstrap";
import './Header.scss';

export default function Header() {

  return (
    <>
    <div className="header sticky-top">
      <Container>
        <div className="d-flex justify-content-between">
          <h1 className="brand m-0 fst-italic">Davin<span style={{color: 'var(--primary)'}}>ridha.</span></h1>
          <div className="hamburger">
            <i className="bi bi-list"></i>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
