import { Col, Container, Row } from "react-bootstrap";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="about">
      <Container className="h-100 d-flex align-items-center h-100">
        <Row>
          <Col md={7}>
                <h1>
                  Hi! I'm Davin Ridha, <br />
                  <span className="text-primary">
                    Junior Front End Developer
                  </span>
                </h1>
                <p>
                  I graduated from SMK Negeri 2 Yogyakarta with a major in
                  Network Information Systems and Applications. I have a keen
                  interest and expertise in web development, particularly as a
                  Front-End Developer. During my time at vocational school, i
                  acquired foundational knowledge in programming and web design.
                </p>
                <p>
                  I am eager to join a collaborative team where i can contribute
                  my skills and learn from others. If you have an exciting
                  project, i would love to discuss how i can be a valuable
                  asset. I am actively seeking new opportunities to apply my
                  skills and continue growing professionally.
                </p>
          </Col>
          <Col md={5}>
            <div className="d-flex justify-content-center">
              <div className="illustration">
                <img
                  src="/illustration/computerIllustration.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
